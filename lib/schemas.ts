import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(3, "El nombre completo es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  university: z.string().min(2, "Universidad/Institución es requerida"),
  degree: z.string().min(2, "Grado/Carrera es requerida"),
  interestArea: z.enum([
    "Legal & Financiero",
    "Startups & IA",
    "Informática & IA",
    "Gestión de PYMEs",
  ]),
  gradYear: z.enum(["2024", "2025", "2026", "2027", "Ya graduado"]),
  motivation: z.string().min(100, "La motivación debe tener al menos 100 caracteres"),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
