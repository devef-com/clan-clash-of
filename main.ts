Deno.serve((_) => {
  const targetUrl = Deno.env.get('clan_url');
  
  // Defaults to a 302 Temporary Redirect if status is omitted
  return Response.redirect(targetUrl, 301); 
});
