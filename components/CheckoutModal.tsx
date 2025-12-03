import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Calculator, Mail, ArrowRight, HardDrive } from 'lucide-react';

export type ServiceType = 'archive' | 'social' | null;

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: ServiceType;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, serviceType }) => {
  const [tapeCount, setTapeCount] = useState(1);
  const [name, setName] = useState('');
  const [includeUsb, setIncludeUsb] = useState(false);
  
  // Pricing Constants
  const SHIPPING_COST = 19;
  const ARCHIVE_PRICE_PER_TAPE = 25;
  const SOCIAL_PRICE_FLAT = 199;
  const USB_PRICE = 10;

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setTapeCount(serviceType === 'archive' ? 1 : 2); // Social cut includes 2 tapes by default
      setName('');
      setIncludeUsb(false); // Reset USB selection
    }
  }, [isOpen, serviceType]);

  if (!isOpen || !serviceType) return null;

  // Calculations
  let subtotal = 0;
  if (serviceType === 'archive') {
    subtotal = (tapeCount * ARCHIVE_PRICE_PER_TAPE) + (includeUsb ? USB_PRICE : 0);
  } else {
    subtotal = SOCIAL_PRICE_FLAT;
  }
  
  const total = subtotal + SHIPPING_COST;

  const handleSendOrder = () => {
    const subject = `Order Request: ${serviceType === 'archive' ? 'The Archive' : 'The Social Cut'} - ${name}`;
    
    let body = `Hi Lost Family Tapes,\n\nI'd like to place an order.\n\n`;
    body += `CUSTOMER NAME: ${name}\n`;
    body += `SERVICE: ${serviceType === 'archive' ? 'The Archive (Digitization Only)' : 'The Social Cut (Viral Edits)'}\n`;
    
    if (serviceType === 'archive') {
      body += `NUMBER OF TAPES: ${tapeCount}\n`;
      body += `PRICE PER TAPE: $${ARCHIVE_PRICE_PER_TAPE}\n`;
      if (includeUsb) {
        body += `USB DRIVE ADD-ON: Yes ($${USB_PRICE})\n`;
      }
    } else {
      body += `PROJECT PRICE: $${SOCIAL_PRICE_FLAT}\n`;
      body += `USB DRIVE: Included\n`;
    }
    
    body += `\n--------------------------------\n`;
    body += `SUBTOTAL: $${subtotal}\n`;
    body += `SHIPPING (Safe Kit): $${SHIPPING_COST}\n`;
    body += `ESTIMATED TOTAL: $${total}\n`;
    body += `--------------------------------\n\n`;
    body += `Please send me the shipping instructions and payment link.\n\nBest,\n${name}`;

    const mailtoLink = `mailto:lostfamilytapes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-paper w-full max-w-md shadow-2xl rounded-sm border-2 border-ink animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-ink text-paper p-6 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShoppingBag className="w-5 h-5 text-alert" />
              <h3 className="font-serif text-2xl font-bold">Checkout</h3>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-80">
              {serviceType === 'archive' ? 'The Archive Plan' : 'The Social Cut Plan'}
            </p>
          </div>
          <button onClick={onClose} className="text-paper/60 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          {/* Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block font-mono text-xs font-bold text-ink mb-1 uppercase">Your Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full p-3 bg-white border border-ink/20 focus:border-ink outline-none font-serif text-lg"
                autoFocus
              />
            </div>

            {serviceType === 'archive' && (
              <>
                <div>
                  <label className="block font-mono text-xs font-bold text-ink mb-1 uppercase">Number of Tapes</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="number" 
                      min="1"
                      max="100"
                      value={tapeCount}
                      onChange={(e) => setTapeCount(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-24 p-3 bg-white border border-ink/20 focus:border-ink outline-none font-serif text-lg"
                    />
                    <span className="text-sm text-ink/60 italic">x ${ARCHIVE_PRICE_PER_TAPE} per tape</span>
                  </div>
                </div>

                {/* USB Add-on Checkbox */}
                <div className="flex items-center gap-3 p-3 border border-ink/10 bg-paper-dark rounded-sm cursor-pointer" onClick={() => setIncludeUsb(!includeUsb)}>
                  <div className={`w-5 h-5 border-2 border-ink flex items-center justify-center transition-colors ${includeUsb ? 'bg-ink' : 'bg-white'}`}>
                    {includeUsb && <div className="w-3 h-3 bg-white" />}
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-ink text-sm flex items-center gap-2">
                       <HardDrive className="w-4 h-4" /> Add USB Flash Drive
                    </span>
                    <span className="text-xs text-ink/60 block">+${USB_PRICE} Flat Rate</span>
                  </div>
                </div>
              </>
            )}
            
            {serviceType === 'social' && (
              <div className="bg-tape/20 p-4 text-sm text-ink/80 border border-ink/5 space-y-2">
                <div className="font-bold text-ink mb-1">Package Includes:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Digitization of up to 2 tapes</li>
                  <li>4 Viral Vertical Edits (9:16)</li>
                  <li className="font-bold text-ink flex items-center gap-2">
                    <HardDrive className="w-3 h-3" /> USB Flash Drive Included
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Receipt Summary */}
          <div className="bg-paper-dark p-4 border border-dashed border-ink/30 space-y-2 font-mono text-sm text-ink">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-ink/70">
              <span>Shipping (Return Kit):</span>
              <span>${SHIPPING_COST.toFixed(2)}</span>
            </div>
            <div className="h-px bg-ink/20 my-2"></div>
            <div className="flex justify-between text-lg font-bold">
              <span>ESTIMATED TOTAL:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Action */}
          <button 
            onClick={handleSendOrder}
            disabled={!name}
            className="w-full py-4 bg-ink text-white font-bold uppercase text-sm tracking-widest hover:bg-ink/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Send Order Request <ArrowRight className="w-4 h-4" />
          </button>
          
          <p className="text-center text-[10px] text-ink/40 font-mono leading-tight">
            *Clicking this opens your email client with a pre-filled order request.<br/>We will reply with a payment link within 24 hours.
          </p>

        </div>
      </div>
    </div>
  );
};