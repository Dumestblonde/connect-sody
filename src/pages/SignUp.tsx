
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { User, CreditCard, Calendar, Lock } from 'lucide-react';

const SignUp = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      // Remove non-digits and trim to 16 characters
      const digits = value.replace(/\D/g, '').substring(0, 16);
      // Add a space after every 4 digits
      const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
      setFormData({ ...formData, [name]: formatted });
      return;
    }
    
    // Format expiry date
    if (name === 'expiry') {
      // Remove non-digits
      const digits = value.replace(/\D/g, '').substring(0, 4);
      // Format as MM/YY
      let formatted = digits;
      if (digits.length > 2) {
        formatted = `${digits.substring(0, 2)}/${digits.substring(2)}`;
      }
      setFormData({ ...formData, [name]: formatted });
      return;
    }
    
    // Format CVV
    if (name === 'cvv') {
      const digits = value.replace(/\D/g, '').substring(0, 3);
      setFormData({ ...formData, [name]: digits });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    };
    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Validate username
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    } else if (formData.username.trim().length < 3) {
      errors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    // Validate card number
    if (!formData.cardNumber.trim()) {
      errors.cardNumber = 'Card number is required';
      isValid = false;
    } else if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
      errors.cardNumber = 'Card number must be 16 digits';
      isValid = false;
    }

    // Validate expiry
    if (!formData.expiry.trim()) {
      errors.expiry = 'Expiry date is required';
      isValid = false;
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      errors.expiry = 'Expiry date must be in MM/YY format';
      isValid = false;
    }

    // Validate CVV
    if (!formData.cvv.trim()) {
      errors.cvv = 'CVV is required';
      isValid = false;
    } else if (formData.cvv.length !== 3) {
      errors.cvv = 'CVV must be 3 digits';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Membership Activated",
        description: "Your $10/month membership has been created successfully!",
      });
      
      // Reset form
      setFormData({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
      });
    }, 1500);
  };

  return (
    <Layout>
      <Hero
        title="Join the .sody network"
        subtitle="Connect with entertainment professionals and grow your career with our premium membership."
        backgroundClass="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-sody-950 dark:to-purple-950"
      />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-sody-900 shadow-xl rounded-xl overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-r from-sody-900 to-purple-900 text-white">
              <h2 className="text-2xl font-bold">Premium Membership - $10/month</h2>
              <p className="text-sody-200 mt-2">Unlock exclusive networking opportunities and tools</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-sody-900 dark:text-white">Account Information</h3>
                
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-sody-700 dark:text-sody-300">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sody-500">
                      <User className="h-4 w-4" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`pl-10 ${formErrors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {formErrors.name && <p className="text-sm text-red-500">{formErrors.name}</p>}
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="username" className="text-sm font-medium text-sody-700 dark:text-sody-300">Username</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sody-500">
                      <User className="h-4 w-4" />
                    </div>
                    <Input
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`pl-10 ${formErrors.username ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="Choose a username"
                    />
                  </div>
                  {formErrors.username && <p className="text-sm text-red-500">{formErrors.username}</p>}
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="password" className="text-sm font-medium text-sody-700 dark:text-sody-300">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sody-500">
                      <Lock className="h-4 w-4" />
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`pl-10 ${formErrors.password ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="Create a password"
                    />
                  </div>
                  {formErrors.password && <p className="text-sm text-red-500">{formErrors.password}</p>}
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-sody-700 dark:text-sody-300">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sody-500">
                      <Lock className="h-4 w-4" />
                    </div>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`pl-10 ${formErrors.confirmPassword ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="Confirm your password"
                    />
                  </div>
                  {formErrors.confirmPassword && <p className="text-sm text-red-500">{formErrors.confirmPassword}</p>}
                </div>
              </div>
              
              <div className="border-t border-sody-200 dark:border-sody-700 pt-6 space-y-4">
                <h3 className="text-xl font-semibold text-sody-900 dark:text-white">Billing Information</h3>
                <p className="text-sm text-sody-600 dark:text-sody-400">
                  You will be charged $10/month for premium membership. Cancel anytime.
                </p>
                
                <div className="space-y-1">
                  <label htmlFor="cardNumber" className="text-sm font-medium text-sody-700 dark:text-sody-300">Card Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sody-500">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className={`pl-10 ${formErrors.cardNumber ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  {formErrors.cardNumber && <p className="text-sm text-red-500">{formErrors.cardNumber}</p>}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="expiry" className="text-sm font-medium text-sody-700 dark:text-sody-300">Expiry Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sody-500">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <Input
                        id="expiry"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        className={`pl-10 ${formErrors.expiry ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="MM/YY"
                      />
                    </div>
                    {formErrors.expiry && <p className="text-sm text-red-500">{formErrors.expiry}</p>}
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="cvv" className="text-sm font-medium text-sody-700 dark:text-sody-300">CVV</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sody-500">
                        <Lock className="h-4 w-4" />
                      </div>
                      <Input
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        className={`pl-10 ${formErrors.cvv ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="123"
                      />
                    </div>
                    {formErrors.cvv && <p className="text-sm text-red-500">{formErrors.cvv}</p>}
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-sody-900 hover:bg-sody-800 text-white font-medium py-2 rounded-full transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Join for $10/month'}
                </Button>
                <p className="text-xs text-center mt-4 text-sody-500 dark:text-sody-400">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
