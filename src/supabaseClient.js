import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pcpaeiuajuouqlbjqxjf.supabase.co'
const supabaseAnonKey = 'PEGAR_AQUI_LA_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
