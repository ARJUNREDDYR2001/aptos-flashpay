# 🚀 FlashPay – Instant Payment Links on Aptos

🔗 Live Demo: https://aptosflashpay.netlify.app/

FlashPay is a Web3 payment-link generator built on Aptos Testnet, enabling merchants to create instant paylinks that customers can:
- Scan via QR code
- Open on mobile or desktop
- Pay using Aptos wallets (Petra, Martian, Rise, etc.)

FlashPay supports:
✔ Wallet connection  
✔ APT payments  
✔ QR Code sharing  
✔ Dynamic payment status  
✔ Merchant dashboard  
✔ OpenAI-powered chatbot assistant  
✔ Works on mobile & desktop

## ✨ Features

### 🔗 1. Generate Payment Links
Merchants can create one-time or multi-use payment links containing:
- Amount in APT
- Vendor address
- Auto-generated link
- QR code for sharing

### 💸 2. Pay With Aptos Wallet
Customers can:
- Scan the QR
- Land on a payment page
- Click Pay Now
- Sign an APT transfer directly from wallet
- View the transaction on Aptos Explorer

### 📊 3. Merchant Dashboard
The dashboard displays:
- List of paylinks
- Status updates (Pending, Paid, Failed)
- Transaction hashes
- Amounts
- Timestamp

### 🤖 4. Built-in AI Chatbot
A floating AI assistant appears on all pages.

**Capabilities:**
- Answer questions about Aptos, FlashPay, wallets, QR payments
- Explain failures or gas fee issues
- 24/7 support
- Uses OpenAI API (secure backend route)

### 📱 5. Mobile-Ready
All flows work seamlessly on:
- Petra mobile
- Aptos browser wallets
- Camera QR scanning
- iOS & Android

## 🛠 Tech Stack

| Layer | Tools |
|-------|-------|
| **Frontend** | Next.js 14 (App Router), TailwindCSS, Radix UI |
| **Blockchain** | Aptos Testnet, Petra Wallet |
| **Payments** | APT transfer via wallet signAndSubmitTransaction |
| **QR Codes** | react-qr-code |
| **AI Chatbot** | OpenAI API (ChatGPT 4o-mini) |
| **UI Enhancements** | Glassmorphism, icons, animations |

## 📂 Project Structure

```
aptos-flashpay/
 ├── app/
 │   ├── generate-paylink/
 │   ├── merchant-dashboard/
 │   ├── payment-status/[id]/
 │   ├── success/
 │   └── api/
 │       └── support-chat/route.ts     # Secure backend chatbot
 │
 ├── components/
 │   ├── ChatbotWidget.tsx             # Floating AI assistant
 │   ├── ConnectAndPay.tsx             # APT wallet payment UI
 │   └── ...
 │
 ├── public/
 ├── package.json
 ├── README.md
 └── .env.local
```

## ⚙️ Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/flashpay.git
cd flashpay
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Environment variables
Create `.env.local`:
```env
OPENAI_API_KEY=your_openai_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

⚠️ **Never expose API key in client code** — this project uses a protected API Route.

### 4️⃣ Run locally
```bash
npm run dev
```
Open http://localhost:3000

## 💳 Payments Flow
1. Merchant enters amount
2. App generates paylink + QR code
3. Customer visits /payment-status/[id]
4. User connects wallet
5. User clicks Pay Now
6. Wallet opens → user signs APT transfer
7. Payment status changes to PAID
8. Merchant dashboard updates
9. User can view tx on Aptos Explorer

## 🤖 Chatbot Integration
- **API Route**: `app/api/support-chat/route.ts`
- **Uses**: GPT-4o-mini
- **System prompt**: "FlashPay Assistant"
- **UI component**: `components/ChatbotWidget.tsx`
- **Injected globally in**: `app/layout.tsx`
- **No API key exposure** — everything routed through backend.

## 📤 Deployment (Netlify / Vercel)

### Netlify Deployment Steps
1. Push repo to GitHub
2. Create new site → "Import from GitHub"
3. Build command:
   ```
   npm run build
   ```
4. Publish directory:
   ```
   .next
   ```
5. Add environment variables:
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_APP_URL`
6. Deploy 🚀

QR Code URLs will automatically point to your deployed domain.

## 🧪 Testing
- Try generating a paylink → open on your phone
- Use Petra wallet mobile to pay
- Confirm APT deduction
- Merchant dashboard updates
- Chatbot responds to user queries

## 📄 License
MIT

---
Built with ❤️ for the Aptos ecosystem
