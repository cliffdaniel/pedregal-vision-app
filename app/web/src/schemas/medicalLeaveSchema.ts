import { z } from 'zod';

export const medicalLeaveSchema = z.object({
    startDate: z.coerce.date({ required_error: 'Campo obligatorio' }),
    endDate: z.coerce.date({ required_error: 'Campo obligatorio' }),
    issueDate: z.coerce.date({ required_error: 'Campo obligatorio' }),
    days: z.number().min(1, 'Debe tener al menos 1 día'),
    dmType: z.string().min(1, 'Selecciona tipo de DM'),
    accidentType: z.string().optional(),
    cmpNumber: z.string().optional(),
    issuingInstitution: z.string().optional(),
    diagnosis: z.string().optional(),
    ciittNumber: z.string().optional(),
    observation: z.string().optional(),
    document: z.any().refine((file) => file instanceof File || file?.length > 0, {
        message: 'Archivo requerido',
    }),
    subsidyDeclaration: z.any().optional(),
    absenceTypeId: z.string().min(1, 'Selecciona tipo de ausencia'),
    employeeId: z.string().uuid({ message: 'Selecciona un empleado válido' }),
});

export type MedicalLeaveFormValues = z.infer<typeof medicalLeaveSchema>;
