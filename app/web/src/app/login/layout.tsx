import { ReactNode } from 'react';

export default function LoginLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 hidden md:flex items-center justify-center bg-gradient-to-br from-[#4974f6] to-indigo-600 relative">
                <div className="text-white max-w-md text-left p-10 bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
                    <div className="text-3xl font-semibold tracking-wide uppercase mb-2">
                        PE - CencoPayroll
                    </div>
                    <div className="text-4xl font-bold mb-4 leading-snug">
                        Impulsa la Gestión y <br />
                        <span className="text-white font-extrabold">Talento Humano</span>
                    </div>
                    <p className="text-sm text-white/90">
                        Optimiza tus procesos, mejora el rendimiento y mantén tu equipo enfocado en
                        lo que importa.
                    </p>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-8">{children}</div>
        </div>
    );
}
