## port-quest

port-quest is designed to perform network port scanning on a given host. It provides two main functions: scan() and main(). This README will guide you through the app's functionality and provide documentation for these functions.

## Prerequisites

Before running this Deno app, ensure that you have Deno installed on your system. You can install Deno by following the instructions provided in the official Deno documentation.

## Installation

    Clone this repository to your local machine.
    Open your terminal and navigate to the project's directory.

## Usage

`Function: scan(hostname: string, port: number): Promise<boolean>`

The `scan()` function is responsible for scanning a specific port on a given host. It takes two parameters:

    hostname (string): The IP address or hostname of the target server to scan.
    port (number): The port number to scan.

The function returns a promise that resolves to a `boolean` value indicating whether the port is open (`true`) or closed (`false`).

#### Example usage:

```
import { scan } from './scanner.ts';

async function example() {
  const hostname = '127.0.0.1';
  const port = 80;

  const isOpen = await scan(hostname, port);
  console.log(`Port ${port} is open: ${isOpen}`);
}

example();
```

`Function: main(targetHost = "127.0.0.1", start = 1, end = 10000)`

The `main()` function is the entry point of the Deno app. It allows you to perform a range of port scans on a specific host. It takes three optional parameters:

    targetHost (string): The IP address or hostname of the target server. Defaults to "127.0.0.1" if not provided.
    start (number): The port number to start scanning from. Defaults to 1 if not provided.
    end (number): The port number to end scanning at. Defaults to 10000 if not provided.

The function initiates port scanning for each port within the specified range and logs the results to the console.

#### Example usage:

```
import { main } from './scanner.ts';

main('example.com', 1, 1000);
```

This example will scan ports 1 to 1000 on the host example.com and log the results.

## Running the App

To run the Deno app and perform port scanning:

1. Open your terminal and navigate to the project's directory.
2. Execute the following command:

   `deno run --allow-net scanner.ts`

The `--allow-net` flag is necessary to grant network access permissions to the Deno app for scanning the ports.

## Conclusion

This Deno app provides a straightforward way to perform network port scanning on a specified host. The `scan()` function allows you to scan an individual port, while the `main()` function enables you to scan a range of ports on a target host. Feel free to modify and expand upon these functions to suit your specific needs.
