import * as React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type Product } from '@/lib/types';
import { generateVTO } from '@/app/actions';
import { Upload, X, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

interface VirtualTryOnModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function VirtualTryOnModal({
  product,
  isOpen,
  onClose,
}: VirtualTryOnModalProps) {
  const [userFile, setUserFile] = React.useState<File | null>(null);
  const [userImagePreview, setUserImagePreview] = React.useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const resetState = React.useCallback(() => {
    setUserFile(null);
    setUserImagePreview(null);
    setGeneratedImage(null);
    setIsLoading(false);
  }, []);

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      resetState();
      setUserFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!userFile) {
        toast({
            variant: "destructive",
            title: "Upload failed",
            description: "Please select an image to upload first.",
        });
        return;
    }

    setIsLoading(true);
    setGeneratedImage(null);

    const reader = new FileReader();
    reader.readAsDataURL(userFile);
    reader.onload = async () => {
      const userImageDataUrl = reader.result as string;
      const result = await generateVTO({
        userImage: userImageDataUrl,
        productImageUrl: product.image.imageUrl,
      });

      setIsLoading(false);
      if (result.error) {
        toast({
            variant: "destructive",
            title: "Generation Failed",
            description: result.error,
        });
      } else if (result.generatedImage) {
        setGeneratedImage(result.generatedImage);
        toast({
            title: "Success!",
            description: "Your virtual try-on image has been generated.",
        });
      }
    };
    reader.onerror = () => {
        setIsLoading(false);
        toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to read the uploaded file.",
        });
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Virtual Try-On</DialogTitle>
          <DialogDescription>
            See how {product.name} looks on you. Upload a photo to get started.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                {generatedImage ? (
                    <Image src={generatedImage} alt="Generated try-on" layout="fill" objectFit="contain" />
                ) : userImagePreview ? (
                    <Image src={userImagePreview} alt="User upload" layout="fill" objectFit="contain" />
                ) : (
                    <div className="text-center text-muted-foreground p-4">
                        <Upload className="mx-auto h-12 w-12 mb-2" />
                        <p>Upload your photo here</p>
                    </div>
                )}
                {isLoading && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    </div>
                )}
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                 <Image
                    src={product.image.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={product.image.imageHint}
                />
            </div>
        </div>

        <DialogFooter className="mt-4 sm:justify-between">
          <div className="flex items-center gap-2">
            <Button asChild variant="outline">
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="mr-2 h-4 w-4" />
                {userFile ? 'Change Photo' : 'Upload Photo'}
              </label>
            </Button>
            <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/*"/>
            {userFile && <span className="text-sm text-muted-foreground truncate max-w-xs">{userFile.name}</span>}
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
             <Button type="button" variant="secondary" onClick={handleClose}>
                Close
              </Button>
            <Button type="button" onClick={handleGenerate} disabled={!userFile || isLoading}>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                    </>
                ) : (
                    'Generate Try-On'
                )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
