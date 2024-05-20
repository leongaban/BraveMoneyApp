<script lang="ts">
  import {
    createTable,
    Render,
    Subscribe,
    createRender,
  } from 'svelte-headless-table'
  import { readable } from 'svelte/store'
  import * as Table from '$lib/components/ui/table'
  import DataTableActions from './data-table-actions.svelte'

  type CostAverage = {
    id: string
    date: string
    amount: number
    price: number
    total: string
  }

  const data: CostAverage[] = [
    {
      id: 'm5gr84i9',
      date: '5/13/2024',
      amount: 11.93758026,
      price: 148.65,
      total: '17745.25',
    },
  ]

  const table = createTable<CostAverage>(readable(data))

  const columns = table.createColumns([
    table.column({
      accessor: 'date',
      header: 'Date',
    }),
    table.column({
      accessor: 'amount',
      header: 'Amount',
    }),
    table.column({
      accessor: 'price',
      header: 'Price',
    }),
    table.column({
      accessor: 'total',
      header: 'Total',
    }),
    table.column({
      accessor: (row: CostAverage) => row.id,
      header: '',
      cell: ({ value }: { value: string }) => {
        // return createRender(DataTableActions, { id: value })
        return createRender(DataTableActions)
      },
    }),
  ])

  console.log('columns', columns)

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } =
    table.createViewModel(columns)
</script>

<div class="rounded-md border">
  <Table.Root {...$tableAttrs}>
    <Table.Header>
      {#each $headerRows as headerRow}
        <Subscribe rowAttrs={headerRow.attrs()}>
          <Table.Row>
            {#each headerRow.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
                <Table.Head {...attrs}>
                  {#if cell.id === 'amount' || cell.id === 'price' || cell.id === 'total'}
                    <div class="text-right">
                      <Render of={cell.render()} />
                    </div>
                  {:else}
                    <Render of={cell.render()} />
                  {/if}
                  <!-- <Render of={cell.render()} /> -->
                </Table.Head>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Header>
    <Table.Body {...$tableBodyAttrs}>
      {#each $pageRows as row (row.id)}
        <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
          <Table.Row {...rowAttrs}>
            {#each row.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                <Table.Cell {...attrs}>
                  {#if cell.id === 'amount' || cell.id === 'price' || cell.id === 'total'}
                    <div class="text-right">
                      <Render of={cell.render()} />
                    </div>
                  {:else}
                    <Render of={cell.render()} />
                  {/if}
                </Table.Cell>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
