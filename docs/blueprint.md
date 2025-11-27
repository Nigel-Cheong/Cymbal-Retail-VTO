# **App Name**: Cymbal Retail VTO

## Core Features:

- Product Catalog Display: Display product details, including image, name, category, price, and a 'Try On' button.
- Category Filtering: Enable filtering of products by category using dynamically generated filter buttons from Firestore.
- Real-Time Product Search: Implement a real-time product search feature, integrated into the header.
- Virtual Try-On (VTO) Image Generation: The application will generate an image of a person wearing the clothing item by using Gemini 1.5 Pro as a tool.
- User Image Upload to Storage: Allow users to upload their images for the try-on feature. Store these images temporarily in Firebase Storage.
- Backend Cloud Function for VTO: Create an HTTP-callable Cloud Function to handle the AI-powered virtual try-on process.
- Recruitment Banner: Implement a recruitment banner with a bold heading, descriptive text, and a 'Learn More' button, styled with Tailwind CSS.

## Style Guidelines:

- Primary color: Dark Lavender (#947AE1) to create a feeling of sophisticated, fashion-forward innovation.
- Background color: Light grey (#F2F0F7), subtly desaturated for a clean backdrop.
- Accent color: Purple (#7552B3) for highlighting key elements and CTAs.
- Body and headline font: 'Plus Jakarta Sans' (sans-serif) for a modern, clean, and readable aesthetic. Note: currently only Google Fonts are supported.
- Use 'Phosphor Icons' for a consistent and modern icon set.
- Utilize a responsive grid layout with Tailwind CSS to ensure compatibility across various devices.
- Incorporate subtle animations on button hover states and during data loading to improve user engagement.