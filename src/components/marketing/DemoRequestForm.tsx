"use client";

import { useActionState } from "react";
import { actionDemoLead } from "@/app/marketing-actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BasicDataProtectionTable } from "@/components/legal/BasicDataProtectionTable";

export function DemoRequestForm({ variant = "default" }: { variant?: "default" | "onDark" }) {
  const [state, action, pending] = useActionState(actionDemoLead, null);
  const dark = variant === "onDark";

  return (
    <form
      action={action}
      className={cn(
        "space-y-3 rounded-2xl border p-5 shadow-sm sm:p-6",
        dark ? "border-slate-700 bg-slate-800/50" : "border-slate-200 bg-white"
      )}
    >
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div>
        <label htmlFor="demo-name" className={cn("text-sm font-medium", dark ? "text-slate-200" : "text-slate-800")}>
          Nombre
        </label>
        <Input id="demo-name" name="name" required placeholder="Tu nombre" className="mt-1 min-h-11" />
      </div>
      <div>
        <label htmlFor="demo-email" className={cn("text-sm font-medium", dark ? "text-slate-200" : "text-slate-800")}>
          Correo
        </label>
        <Input
          id="demo-email"
          name="email"
          type="email"
          required
          placeholder="correo@empresa.es"
          className="mt-1 min-h-11"
        />
      </div>
      <div>
        <label
          htmlFor="demo-company"
          className={cn("text-sm font-medium", dark ? "text-slate-200" : "text-slate-800")}
        >
          Empresa
        </label>
        <Input id="demo-company" name="company" placeholder="Razón social" className="mt-1 min-h-11" />
      </div>
      <div>
        <label htmlFor="demo-phone" className={cn("text-sm font-medium", dark ? "text-slate-200" : "text-slate-800")}>
          Teléfono
        </label>
        <Input id="demo-phone" name="phone" type="tel" placeholder="Opcional" className="mt-1 min-h-11" />
      </div>
      <label className={cn("flex gap-2 text-sm", dark ? "text-slate-200" : "text-slate-800")}>
        <input type="checkbox" name="terms" required className="mt-1 h-4 w-4 min-h-[1rem]" />
        <span>
          He leído la{" "}
          <a href="/privacidad" className="text-[#0A7F85] underline" target="_blank" rel="noopener noreferrer">
            política de privacidad
          </a>
          . <span className="text-red-500">*</span>
        </span>
      </label>
      <label className={cn("flex gap-2 text-sm", dark ? "text-slate-400" : "text-slate-600")}>
        <input type="checkbox" name="marketing" className="mt-1 h-4 w-4" />
        <span>Deseo recibir comunicaciones comerciales sobre FrigoTrace y sus novedades por correo electrónico (opcional).</span>
      </label>
      <BasicDataProtectionTable purpose="demo" />
      <div>
        <label
          htmlFor="demo-message"
          className={cn("text-sm font-medium", dark ? "text-slate-200" : "text-slate-800")}
        >
          Mensaje
        </label>
        <textarea
          id="demo-message"
          name="message"
          placeholder="¿En qué podemos ayudarte?"
          rows={3}
          className={cn(
            "mt-1 w-full rounded-lg border px-3 py-2 text-sm min-h-[88px]",
            dark ? "border-slate-600 bg-slate-900 text-white" : "border-slate-200 bg-white"
          )}
        />
      </div>
      {state?.error && (
        <p className="text-sm text-red-400" role="alert">
          {state.error}
        </p>
      )}
      {state?.ok && (
        <p className="text-sm text-emerald-400" role="status">
          Solicitud recibida. Gracias.
        </p>
      )}
      <Button type="submit" disabled={pending} className="min-h-11 w-full">
        {pending ? "Enviando…" : "Enviar solicitud"}
      </Button>
    </form>
  );
}