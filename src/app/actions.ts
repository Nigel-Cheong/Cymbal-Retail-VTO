'use server';

import { virtualTryOnImageGeneration } from '@/ai/flows/virtual-try-on-image-generation';

async function imageUrlToDataUrl(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }
  const blob = await response.blob();
  const buffer = Buffer.from(await blob.arrayBuffer());
  const dataUrl = `data:${blob.type};base64,${buffer.toString('base64')}`;
  return dataUrl;
}

export async function generateVTO(
  { userImage, productImageUrl }: { userImage: string; productImageUrl: string }
): Promise<{ generatedImage?: string; error?: string }> {
  try {
    const productImageDataUrl = await imageUrlToDataUrl(productImageUrl);

    const result = await virtualTryOnImageGeneration({
      userImage: userImage,
      productImage: productImageDataUrl,
    });

    if (!result.generatedImage) {
        throw new Error('AI model did not return an image.');
    }

    return { generatedImage: result.generatedImage };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred during VTO generation.';
    return { error: errorMessage };
  }
}
