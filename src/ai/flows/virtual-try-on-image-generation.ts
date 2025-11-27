'use server';
/**
 * @fileOverview Generates a virtual try-on image by combining a user-uploaded photo with a product image using the Gemini 2.5 Flash Image model.
 *
 * - virtualTryOnImageGeneration - A function that generates the virtual try-on image.
 * - VirtualTryOnImageGenerationInput - The input type for the virtualTryOnImageGeneration function.
 * - VirtualTryOnImageGenerationOutput - The return type for the virtualTryOnImageGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VirtualTryOnImageGenerationInputSchema = z.object({
  userImage: z
    .string()
    .describe(
      'A photo of the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
  productImage: z
    .string()
    .describe(
      'A photo of the product, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type VirtualTryOnImageGenerationInput = z.infer<typeof VirtualTryOnImageGenerationInputSchema>;

const VirtualTryOnImageGenerationOutputSchema = z.object({
  generatedImage: z
    .string()
    .describe("The generated try-on image as a data URI."),
});
export type VirtualTryOnImageGenerationOutput = z.infer<typeof VirtualTryOnImageGenerationOutputSchema>;

export async function virtualTryOnImageGeneration(input: VirtualTryOnImageGenerationInput): Promise<VirtualTryOnImageGenerationOutput> {
  return virtualTryOnImageGenerationFlow(input);
}

const virtualTryOnImageGenerationPrompt = ai.definePrompt({
  name: 'virtualTryOnImageGenerationPrompt',
  input: {schema: VirtualTryOnImageGenerationInputSchema},
  output: {schema: VirtualTryOnImageGenerationOutputSchema},
  prompt: [
    {media: {url: '{{{userImage}}}'}},
    {
      text: `You are a virtual try-on expert. Combine the following two images to show the person in the first image wearing the clothing item from the second image. The generated image should be realistic and high-quality.`,
    },
    {media: {url: '{{{productImage}}}'}},
  ],
  config: {
    responseModalities: ['TEXT', 'IMAGE'],
  },
});

const virtualTryOnImageGenerationFlow = ai.defineFlow(
  {
    name: 'virtualTryOnImageGenerationFlow',
    inputSchema: VirtualTryOnImageGenerationInputSchema,
    outputSchema: VirtualTryOnImageGenerationOutputSchema,
  },
  async input => {
    const {media} = await ai.generate(virtualTryOnImageGenerationPrompt(input));
    return {generatedImage: media!.url!};
  }
);
