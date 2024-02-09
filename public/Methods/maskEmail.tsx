export default function maskEmail(email:String) {
    // Split the email address into local and domain parts
    const [localPart, domain] = email.split('@');
  
    // Determine the number of characters to mask in the local part
    const maskLength = Math.max(0, localPart.length - 3);
  
    // Create the masked local part with asterisks
    const maskedLocalPart = localPart.substring(0, 3) + '*'.repeat(maskLength);
  
    // Combine the masked local part and the domain to form the masked email
    const maskedEmail = `${maskedLocalPart}@${domain}`;
  
    return maskedEmail;
  }