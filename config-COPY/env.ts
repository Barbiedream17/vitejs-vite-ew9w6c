import { z } from "zod";

const envSchema = z.object({
  VITE_APP_URL: z.string().url(),
  VITE_GOOGLE_CLIENT_ID: z.string().min(1),
  VITE_API_URL: z.string().url(),
  VITE_STRIPE_PRO_MONTHLY_PLAN_ID: z.string().min(1),
  VITE_STRIPE_PRO_YEARLY_PLAN_ID: z.string().min(1),
  VITE_STRIPE_BUSINESS_MONTHLY_PLAN_ID: z.string().min(1),
  VITE_STRIPE_BUSINESS_YEARLY_PLAN_ID: z.string().min(1),
});

const processEnv = {
  VITE_APP_URL: import.meta.env.VITE_APP_URL,
  VITE_GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_STRIPE_PRO_MONTHLY_PLAN_ID: import.meta.env.VITE_STRIPE_PRO_MONTHLY_PLAN_ID,
  VITE_STRIPE_PRO_YEARLY_PLAN_ID: import.meta.env.VITE_STRIPE_PRO_YEARLY_PLAN_ID,
  VITE_STRIPE_BUSINESS_MONTHLY_PLAN_ID: import.meta.env.VITE_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
  VITE_STRIPE_BUSINESS_YEARLY_PLAN_ID: import.meta.env.VITE_STRIPE_BUSINESS_YEARLY_PLAN_ID,
};

export const env = envSchema.parse(processEnv);