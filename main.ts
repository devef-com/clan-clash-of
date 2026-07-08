Deno.serve(() => {
  return new Response("DEPLOY " + crypto.randomUUID(), {
    headers: {
      "content-type": "text/plain",
    },
  });
});
/*
Deno.serve((_) => {
  const targetUrl = Deno.env.get('clan_url');
  console.log("clan_url =", JSON.stringify(targetUrl));

  return new Response(targetUrl);
});
*/
