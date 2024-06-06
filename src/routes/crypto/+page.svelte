<script>
  import * as Card from '$lib/components/ui/card'
  import * as Table from '$lib/components/ui/table'

  import DataTable from '@/components/data-table/data-table.svelte'
  import { ArrowUp } from 'lucide-svelte'
  import { ArrowDown } from 'lucide-svelte'

  import { toFinancialNumber as toFinNum } from '@/utils'

  let SOL_PRICE = 170.49

  const wallets = [
    {
      name: 'Rocket',
      amount: 8.12997,
      address: '4MCR5bL1nkR8UPNBu2NZwKnGH6cnH37JZWnf7r7cHvZy',
      total: 8.12997 * SOL_PRICE,
    },
    {
      name: 'Rocket Staking',
      amount: 110,
      address: '4MCR5bL1nkR8UPNBu2NZwKnGH6cnH37JZWnf7r7cHvZy',
      total: 110 * SOL_PRICE,
    },
    {
      name: 'Main',
      amount: 0.04491961,
      address: 'DqabcUFkt9UvV9wDEtK59nySRPhy71n3JuFkCcw854vL',
      total: 0.04491961 * SOL_PRICE,
    },
    {
      name: 'MagicEden',
      amount: 0.072570177,
      address: 'CKUHg1zXpEzmDJDGuUjypE27bwoNwRKvLkBa8J7KF5a6',
      total: 0.072570177 * SOL_PRICE,
    },
    {
      name: 'Backpack 3',
      amount: 0.133141464,
      address: '4G1Bb7wJUCkcmewnML75JyrKe49KNvx5VjDxQP7mSE11',
      total: 0.133141464 * SOL_PRICE,
    },
    {
      name: 'Moon Royalties',
      amount: 0.329630861,
      address: 'DJPEgMhQGiBhVtaPedzcwPuGzfPzykEmPSXCQHZMwMZT',
      total: 0.329630861 * SOL_PRICE,
    },
  ]
</script>

<header class="page-header">
  <div class="flex justify-between items-center">
    <div>
      <h1>Crypto</h1>
      <p>Dashboard: crypto prices, wallets & cost average</p>
    </div>
    <div class="right-align">
      <h2>
        Portfolio Value: <span class="portfolio-value">$91,332.34</span>
      </h2>
    </div>
  </div>

  <div class="grid-container">
    <div class="column column1">
      <Card.Root class="w-[250px] mb-4">
        <Card.Header>
          <Card.Title class="slate-300">Coin Prices</Card.Title>
        </Card.Header>
        <Card.Content>
          <ul>
            <li>
              <strong class="slate-500">BTC</strong> $66,729
              <ArrowUp color="#84cc16" size="10" />
            </li>
            <li>
              <strong class="slate-500">SOL</strong>
              $170.49 <ArrowDown color="#dc2626" size="10" />
            </li>
            <li>
              <strong class="slate-500">BONK</strong>
              $0.00003223 <ArrowDown color="#dc2626" size="10" />
            </li>
          </ul>
        </Card.Content>
      </Card.Root>

      <Card.Root class="w-[250px]">
        <Card.Header>
          <Card.Title class="slate-300">Portfolio</Card.Title>
        </Card.Header>
        <Card.Content>
          <ul>
            <li class="grid grid-cols-2 w-full">
              <strong>BTC</strong>
              <span class="text-right">1</span>
            </li>
            <li class="grid grid-cols-2 w-full">
              <span class="slate-400 text-left">Value: </span>
              <span class="text-right">$70,221</span>
            </li>
            <li class="grid grid-cols-2 w-full mt-4">
              <strong>SOL</strong>
              <span class="text-right">112.71</span>
            </li>
            <li class="grid grid-cols-2 w-full">
              <span class="slate-400 text-left">Value: </span>
              <span class="text-right">$20,075.92</span>
            </li>
            <li class="grid grid-cols-2 w-full mt-4">
              <strong>BONK</strong>
              <span class="text-right">31 mill</span>
            </li>
            <li class="grid grid-cols-2 w-full">
              <span class="slate-400 text-left">Value: </span>
              <span class="text-right">$1,035.42</span>
            </li>
          </ul>
        </Card.Content>
      </Card.Root>
    </div>
    <div class="column column2">
      <Card.Root class="w-[420px]">
        <Card.Header>
          <Card.Title class="slate-300">Solana Wallets</Card.Title>
        </Card.Header>
        <Card.Content>
          <Table.Root>
            <Table.Header>
              <Table.Row class="slate-300">
                <Table.Head>Name</Table.Head>
                <Table.Head class="text-right">Amount</Table.Head>
                <Table.Head class="text-right">Total</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {#each wallets as wallet, i (i)}
                <Table.Row>
                  <Table.Cell class="font-medium slate-500"
                    >{wallet.name}</Table.Cell
                  >
                  <Table.Cell class="text-right">{wallet.amount}</Table.Cell>
                  <Table.Cell class="text-right"
                    >{toFinNum(wallet.total)}</Table.Cell
                  >
                </Table.Row>
              {/each}
            </Table.Body>
          </Table.Root>
        </Card.Content>
      </Card.Root>
    </div>
    <div class="column column3">
      <DataTable />
    </div>
  </div>
</header>
