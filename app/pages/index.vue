<script setup lang="ts">
const { data, status } = await useFetch('/api/fiches')

const columns = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'price', header: 'Prix' },
  { accessorKey: 'pctVsMarket', header: 'Prix marché' },
  { accessorKey: 'mileage', header: 'Kilométrage' },
  { accessorKey: 'yearsLeft', header: 'Années à vivre' },
  { accessorKey: 'costPerYear', header: 'Coût par an' },
  { accessorKey: 'brand', header: 'Marque' },
  { accessorKey: 'model', header: 'Modèle' },
  { accessorKey: 'year', header: 'Année' },
]
</script>

<template>
  <div class="flex*1">
    <UTable
      :data="data"
      class="flex-1"
      :loading="status === 'pending'"
      :columns="columns"
    >
      <template #id-cell="{ row }">
        <UButton
          :to="`https://www.leboncoin.fr/ad/utilitaires/${row.original.id}`"
          target="_blank"
          color="neutral"
          variant="outline"
        >
          {{ row.original.id }}
        </UButton>
      </template>
      <template #price-cell="{ row }">
        <strong class="text-gray-900">
          {{ row.original.price }} €
        </strong>
      </template>
      <template #mileage-cell="{ row }">
        {{ row.original.mileage }} km
      </template>
      <template #costPerYear-cell="{ row }">
        {{ row.original.costPerYear }} €/an
      </template>
      <template #pctVsMarket-cell="{ row }">
        <span
          :class="row.original.pctVsMarket < 0 ? 'text-primary' : 'text-warning'"
          class="font-bold"
        >
          {{ row.original.pctVsMarket }} %
        </span>
      </template>
    </UTable>
  </div>
</template>
