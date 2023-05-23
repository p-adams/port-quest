async function scan(hostname: string, port: number): Promise<boolean> {
  try {
    const connect = await Deno.connect({ hostname, port });
    connect.close();
    return true;
  } catch (e) {
    return false;
  }
}

async function main(targetHost = "127.0.0.1", start = 1, end = 10_000) {
  console.log(`Scanning ports on ${targetHost}...\n`);
  for (let index = start; index <= end; index++) {
    const isOpen = await scan(targetHost, index);
    if (isOpen) {
      console.log(`Port ${index} is open`);
    }
  }
}

main().catch((err) => console.error(err));
