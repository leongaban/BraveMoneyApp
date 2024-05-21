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
  import { toFinancialNumber as toFinNum } from '@/utils'

  type CostAverage = {
    date: string
    amount: number
    price: number
    total: string
  }

  // TODO save in state
  const data: CostAverage[] = [
    {
      date: '5/13/2024',
      amount: 11.93758026,
      price: 148.65,
      total: toFinNum(17745.25), // TODO this calculation is done before
    },
    {
      date: '5/21/2024',
      amount: 1.118132,
      price: 178.33,
      total: toFinNum(199.4),
    },
  ]

  const table = createTable<CostAverage>(readable(data))

  const indexAccessor = (row: CostAverage, index: number) => index

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
      accessor: (row: CostAverage) => indexAccessor(row, data.indexOf(row)),
      header: '',
      cell: ({ value }: { value: number }) => {
        return createRender(DataTableActions, { id: value.toString() }) // Pass the index or a unique value as id
      },
    }),
  ])

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
                </Table.Head>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Header>
    <Table.Body {...$tableBodyAttrs}>
      {#each $pageRows as row, index (index)}
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
