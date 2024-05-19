<script>
  import * as Card from '$lib/components/ui/card'
  import * as Table from '$lib/components/ui/table'

  import UpArrowIcon from '@/components/UpArrowIcon.svelte'
  import DownArrowIcon from '@/components/DownArrowIcon.svelte'

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
  <h1>Crypto</h1>
  <p>Dashboard: crypto prices, wallets & cost average</p>

  <div class="grid-container">
    <div class="column column1">
      <Card.Root class="w-[250px]">
        <Card.Header>
          <Card.Title class="slate-300">Portfolio</Card.Title>
        </Card.Header>
        <Card.Content>
          <ul>
            <li>
              <strong class="amber-600">BTC</strong> $66,729 <UpArrowIcon
                colorClass="lime-500"
              />
            </li>
            <li>
              <strong class="amber-600">SOL</strong>
              $170.49 <DownArrowIcon colorClass="red-600" />
            </li>
            <li>
              <strong class="amber-600">BONK</strong>
              $0.00002615
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
    <div class="column column3">Column 3 - this will expand</div>
  </div>
</header>
