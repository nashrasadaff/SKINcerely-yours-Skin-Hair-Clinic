-- Lumiere Skin & Hair Clinic — appointment requests
-- Run in Supabase SQL editor, or `supabase db push` with the CLI.

create table if not exists public.appointments (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  phone       text not null,
  email       text,
  service     text,
  message     text,
  status      text not null default 'new'
              check (status in ('new', 'contacted', 'confirmed', 'cancelled'))
);

-- Public visitors may insert a booking request; only authenticated
-- staff (e.g. a future admin dashboard) may read or update.
alter table public.appointments enable row level security;

create policy "anyone can request an appointment"
  on public.appointments
  for insert
  to anon, authenticated
  with check (true);

create policy "staff can read appointments"
  on public.appointments
  for select
  to authenticated
  using (true);
