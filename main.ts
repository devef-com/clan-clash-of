Deno.serve((_) => {
  const targetUrl = process.env.clan_url;
  
  // Defaults to a 302 Temporary Redirect if status is omitted
  return Response.redirect(targetUrl, 301); 
});
