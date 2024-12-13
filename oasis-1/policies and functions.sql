CREATE POLICY "Enable select settings for authenticated user" on "public"."settings"
AS PERMISSIVE FOR SELECT
TO public
USING ((auth.role() = 'authenticated'::text));

CREATE POLICY "Policy for authenticated user to update settings" on "public"."settings"
AS PERMISSIVE FOR UPDATE
TO public
USING ((auth.role() = 'authenticated'::text));

CREATE POLICY "Eanble supabase admin to update" on "public"."profiles"
AS PERMISSIVE FOR UPDATE
TO supabase_admin
USING (true);

CREATE POLICY "Enable all roles to update" on "public"."profiles"
AS PERMISSIVE FOR UPDATE
TO supabase_auth_admin
USING (true);

CREATE POLICY "Enable Anon updates" on "public"."profiles"
AS PERMISSIVE FOR UPDATE
TO anon
USING (true);

CREATE POLICY "Enable insert for public" on "public"."profiles"
AS PERMISSIVE FOR INSERT
TO public;

CREATE POLICY "enable select for all roles" on "public"."profiles"
AS PERMISSIVE FOR SELECT
TO supabase_auth_admin
USING (true);

CREATE POLICY "Enable Update for Authenticated users" on "public"."profiles"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Enable update for suapabse auth admin" on "public"."profiles"
AS PERMISSIVE FOR UPDATE
TO supabase_auth_admin
USING (true);

CREATE POLICY "Enable delete for authenticated users only" on "public"."cabins"
AS PERMISSIVE FOR DELETE
TO public
USING ((auth.role() = 'authenticated'::text));

CREATE POLICY "Enable insert for authenticated users only" on "public"."cabins"
AS PERMISSIVE FOR INSERT
TO authenticated

WITH CHECK (true);

CREATE POLICY "Enable read access for all users" on "public"."cabins"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable update for authenticated users only" on "public"."cabins"
AS PERMISSIVE FOR UPDATE
TO authenticated

WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users onlys" on "public"."cabins"
AS PERMISSIVE FOR UPDATE
TO public

WITH CHECK ((auth.role() = 'authenticated'::text));

CREATE POLICY "Enable update for authenticated users onlyss" on "public"."cabins"
AS PERMISSIVE FOR UPDATE
TO public
USING ((auth.role() = 'authenticated'::text));

CREATE POLICY "Enable read access for all users" on "public"."bookings"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

create function check_if_today_between_start_and_end_date()
language pgplsql
returns integer
as $$
    select count(*) from bookings where (select * from today()) >= startdate and (select * from today()) <= enddate
$$

create function get_booking_today()
language pgplsql
returns TABLE(fullname text, status text, numnights integer, id integer)
as $$
    
    select
    guests.fullname,
    bookings.status,
    bookings.numnights,
    bookings.id
    from
    bookings
    inner join guests on bookings.guestid = guests.id
    where
    to_char((select today()), 'dd/mm/yyyy') = to_char(startdate, 'dd/mm/yyyy')

$$

create function get_summary_numnights()
language pgplsql
returns TABLE(numnights integer)
as $$
    select numnights from bookings
$$

create function insert_metadata_profile1()
language pgplsql
returns trigger
as $$
    begin
    insert into public.profiles (id, fullname)
    values (new.id, new.raw_user_meta_data ->> 'fullname');
    return new;
    end;
$$

create function is_super_admin()
language pgplsql
returns boolean
as $$
    BEGIN
    RETURN EXISTS (
        SELECT 1 FROM auth.users WHERE id = user_id AND is_super_admin = TRUE
    );
    END;
$$

create function testing()
language pgplsql
returns TABLE(date_col date, totalsales integer)
as $$
    declare 
    test record;
    begin
    DROP TABLE IF EXISTS date_temp_table;
    create temp table date_temp_table(
    date_col date,
    totalsales integer
    );
    for test in select generate_series(query_startdate::date, query_enddate::date, '1 day'::interval)
    loop
    insert into date_temp_table(date_col, totalsales) values (test.generate_series, (select sum(totalprice) from bookings where to_char(startdate, 'yyyy-mm-dd')=to_char(test.generate_series, 'yyyy-mm-dd')));
    end loop;

    RETURN QUERY select
    *
    from
    date_temp_table;
$$

create function today()
language pgplsql
returns date
as $$
    select current_date
$$

create function update_profile_row()
language pgplsql
returns trigger
as $$
    begin
        update public.profiles set filename=new.raw_user_meta_data->>'filename' where id::text=new.raw_user_meta_data->>'id';
        
        raise warning 'ran this update_profile_row function';
        raise warning '%',new.raw_user_meta_data->>'filename';
        raise warning '%',new.raw_user_meta_data->>'id';
        return new;
    end;
$$