# Deployment Guide for STEM KEEA Website

## Prerequisites
- GitHub account with repository access
- Netlify account

## Steps to Deploy

### 1. Push to GitHub (Already Done)
Your code is already in a GitHub repository at: `https://github.com/abdul-aziz165/mykeea.git`

### 2. Deploy to Netlify

1. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up or log in to your account

2. **Connect GitHub Repository**
   - Click on "New site from Git"
   - Choose "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select your repository: `abdul-aziz165/mykeea`

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: (Netlify will detect automatically)

4. **Deploy Site**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your application

### 3. Access Your Deployed Site
- Once deployed, Netlify will provide you with a URL (e.g., `https://your-site-name.netlify.app`)
- Your admin panel will be accessible at: `https://your-site-name.netlify.app/admin`
- Use the demo credentials to access the admin panel:
  - **Username**: `admin`
  - **Password**: `password`

### 4. Custom Domain (Optional)
- You can add a custom domain in Netlify's site settings
- Go to "Domain settings" > "Custom domains"
- Add your domain and follow the DNS configuration instructions

## Important Notes

### Admin Panel Authentication
- The admin panel uses simple demo authentication (username: `admin`, password: `password`)
- For production use, consider implementing proper authentication with environment variables

### Environment Variables (If Needed)
If you need to add environment variables later:
1. Go to Netlify dashboard > Site settings > Environment variables
2. Add any required variables (e.g., API keys, database URLs)

### Continuous Deployment
- Netlify will automatically redeploy when you push changes to the main branch
- You can configure branch deployments for staging/preview environments

## Testing the Deployment
After deployment, test:
1. ✅ Main website functionality
2. ✅ Mobile responsiveness 
3. ✅ Admin panel access at `/admin`
4. ✅ Navigation and all pages

## Troubleshooting
- If the build fails, check the build logs in Netlify
- Ensure all dependencies are in `package.json`
- Verify the build command works locally with `npm run build`

Your application is now ready for deployment! 🚀
