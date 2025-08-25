import { ReactNode } from 'react';

export default function LoginLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 hidden md:flex items-center justify-center bg-gradient-to-br from-[#4974f6] to-indigo-600 relative">
                <div className="text-white max-w-md text-left p-10 bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
                    <div className="text-3xl font-semibold tracking-wide uppercase mb-2">
                        Pedregal Visión
                    </div>
                    <div className="text-2xl font-bold mb-4 leading-snug">
                        Impulsa tus procesos y centraliza la información
                    </div>
                    <p className="text-2xl text-white/90">
                        con herramientas modernas para alcanzar mejores resultados.
                    </p>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-8">{children}</div>
        </div>
    );
}
