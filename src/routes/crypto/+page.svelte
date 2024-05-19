<script>
  import * as Card from '$lib/components/ui/card';
</script>

<header class="page-header">
  <h1>Crypto</h1>
  <p>Dashboard: crypto prices, wallets & cost average</p>

  <div class="grid-container">
    <div class="column column1">
      <Card.Root class="w-[200px]">
        <Card.Header>
          <Card.Title>Crypto Portfolio</Card.Title>
        </Card.Header>
        <Card.Content>
          <ul>
            <li>
              <strong class="orange-symbol">BTC</strong>
              $66,729
            </li>
            <li>
              <strong class="orange-symbol">SOL</strong>
              $170.49
            </li>
            <li>
              <strong class="orange-symbol">BONK</strong>
              $0.00002615
            </li>
          </ul>
        </Card.Content>
      </Card.Root>
    </div>
    <div class="column column2">
      <Card.Root class="w-[320px]">
        <Card.Header>
          <Card.Title>Crypto Wallets</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>Get started with your new project.</p>
        </Card.Content>
      </Card.Root>
    </div>
    <div class="column column3">Column 3 - this will expand</div>
  </div>
</header>
