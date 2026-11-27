"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { actionContactForm, type ContactFormState } from "@/app/marketing-actions";
import {
  CONTACT_FIELD_LIMITS,
  CONTACT_MOTIVO_OPTIONS,
  CONTACT_PERFIL_OPTIONS,
  CONTACT_QUIEN_RECOMENDO_OPTIONS,
  RECOMMENDATION_DETAIL,
  RECOMMENDATION_DETAIL_DEFAULT,
} from "@/lib/contact-form-config";
import { BasicDataProtectionTable } from "@/components/legal/BasicDataProtectionTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const selectClassName =
  "flex h-10 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-[#0A7F85]";

type SelectFieldProps = {
  id: string;
  name: string;
  label: React.ReactNode;
  options: readonly string[];
  required?: boolean;
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
};

function SelectField({
  id,
  name,
  label,
  options,
  required,
  defaultValue,
  value,
  onChange,
  placeholder = "Elige una opción",
}: SelectFieldProps) {
  const isControlled = value !== undefined;

  return (
    <label htmlFor={id} className="block space-y-1.5 text-sm font-medium text-slate-800">
      <span>{label}</span>
      <select
        id={id}
        name={name}
        required={required}
        className={selectClassName}
        {...(isControlled ? { value, onChange } : { defaultValue: defaultValue ?? "" })}
      >
        <option value="" disabled={required}>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function resolveMotivoFromSearch(motivoParam: string | null): string {
  if (motivoParam === "demo") return "Ver una demo";
  if (motivoParam === "otra") return "Otra consulta";
  return CONTACT_MOTIVO_OPTIONS[0];
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const motivoDefault = useMemo(
    () => resolveMotivoFromSearch(searchParams.get("motivo")),
  [searchParams]
  );

  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    actionContactForm,
    null
  );
  const [quienRecomendo, setQuienRecomendo] = useState("");

  const detalleCfg = RECOMMENDATION_DETAIL[quienRecomendo] ?? RECOMMENDATION_DETAIL_DEFAULT;
  const detalleLabel = detalleCfg.obligatorio
    ? `${detalleCfg.texto} *`
    : `${detalleCfg.texto} (opcional)`;

  useEffect(() => {
    if (state?.ok) {
      setQuienRecomendo("");
    }
  }, [state?.ok]);

  if (state?.ok) {
    return (
      <div
        className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A7F85]/10 text-[#0A7F85]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 12l3 3 5-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-slate-900">Hemos recibido tu solicitud</h2>
        <p className="mt-2 text-slate-600">En breve nos pondremos en contacto contigo.</p>
      </div>
    );
  }

  return (
    <form id="contact-form" action={formAction} className="space-y-5" noValidate>
      <p className="text-sm text-slate-600">Los campos con * son obligatorios.</p>

      {state?.error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {state.error}
        </p>
      ) : null}

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="web_url">
          No rellenar este campo
          <input type="text" id="web_url" name="web_url" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <SelectField
        id="motivo"
        name="motivo"
        label="Motivo de la consulta"
        options={CONTACT_MOTIVO_OPTIONS}
        defaultValue={motivoDefault}
      />

      <label htmlFor="nombre" className="block space-y-1.5 text-sm font-medium text-slate-800">
        <span>Nombre *</span>
        <Input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          maxLength={CONTACT_FIELD_LIMITS.nombre}
          required
        />
      </label>

      <label htmlFor="email" className="block space-y-1.5 text-sm font-medium text-slate-800">
        <span>Correo electrónico *</span>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={CONTACT_FIELD_LIMITS.email}
          required
        />
      </label>

      <label htmlFor="telefono" className="block space-y-1.5 text-sm font-medium text-slate-800">
        <span>Teléfono</span>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          autoComplete="tel"
          maxLength={CONTACT_FIELD_LIMITS.telefono}
        />
      </label>

      <SelectField
        id="perfil"
        name="perfil"
        label="Perfil *"
        options={CONTACT_PERFIL_OPTIONS}
        required
      />

      <label htmlFor="provincia" className="block space-y-1.5 text-sm font-medium text-slate-800">
        <span>Provincia</span>
        <Input
          id="provincia"
          name="provincia"
          type="text"
          maxLength={CONTACT_FIELD_LIMITS.provincia}
        />
      </label>

      <label htmlFor="explotaciones" className="block space-y-1.5 text-sm font-medium text-slate-800">
        <span>Nº aproximado de explotaciones que gestionas</span>
        <Input id="explotaciones" name="explotaciones" type="number" min={0} />
      </label>

      <SelectField
        id="quien-recomendo"
        name="quien-recomendo"
        label="¿Quién te lo ha recomendado? *"
        options={CONTACT_QUIEN_RECOMENDO_OPTIONS}
        required
        value={quienRecomendo}
        onChange={(event) => setQuienRecomendo(event.target.value)}
      />

      <label
        htmlFor="quien-recomendo-detalle"
        className="block space-y-1.5 text-sm font-medium text-slate-800"
      >
        <span id="quien-recomendo-detalle-label">{detalleLabel}</span>
        <Input
          id="quien-recomendo-detalle"
          name="quien-recomendo-detalle"
          type="text"
          maxLength={CONTACT_FIELD_LIMITS.quienRecomendoDetalle}
          placeholder={detalleCfg.placeholder}
          required={detalleCfg.obligatorio}
          key={`${quienRecomendo}-${detalleCfg.texto}`}
        />
      </label>

      <label htmlFor="comentarios" className="block space-y-1.5 text-sm font-medium text-slate-800">
        <span>Comentarios</span>
        <textarea
          id="comentarios"
          name="comentarios"
          rows={4}
          maxLength={CONTACT_FIELD_LIMITS.comentarios}
          className={cn(
            "flex min-h-[6rem] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#0A7F85]"
          )}
        />
      </label>

      <label
        htmlFor="acepto-privacidad"
        className="flex items-start gap-2 text-sm font-normal text-slate-700"
      >
        <input
          type="checkbox"
          id="acepto-privacidad"
          name="acepto-privacidad"
          required
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0A7F85] focus:ring-[#0A7F85]"
        />
        <span>
          (Obligatoria) He leído la{" "}
          <Link href="/privacidad" className="text-[#0A7F85] underline">
            política de privacidad
          </Link>{" "}
          y consiento el tratamiento de mis datos para atender mi solicitud de información, demo o
          condiciones de contratación. *
        </span>
      </label>

      <label
        htmlFor="acepto-comunicaciones"
        className="flex items-start gap-2 text-sm font-normal text-slate-700"
      >
        <input
          type="checkbox"
          id="acepto-comunicaciones"
          name="acepto-comunicaciones"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0A7F85] focus:ring-[#0A7F85]"
        />
        <span>(Voluntaria) Quiero recibir por correo electrónico novedades sobre FrigoTrace.</span>
      </label>

      <BasicDataProtectionTable purpose="demo" />

      <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
        {isPending ? "Enviando datos..." : "Enviar"}
      </Button>
    </form>
  );
}