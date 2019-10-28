<template>
    <q-page class="full-width row inline wrap justify-center items-center content-center" id="moedas" >
        <q-select id="moeda1" class="col-3 self-center"
        rounded outlined
        v-model="model"
        style="width: 251px"
        :options="[
            { label: 'US Dollar (USD)', value: 'USD'},
            { label: 'Japanese Yen (JPY)', value: 'JPY'},
            { label: 'Bulgarian Lev (BGN)', value: 'BGN'},
            { label: 'Czech Koruna (CZK)', value: 'CZK'},
            { label: 'Danish Krone (DKK)', value: 'DKK'},
            { label: 'Pound Sterling (GBP)', value: 'GBP'},
            { label: 'Hungarian Forint (HUF)', value: 'HUF'},
            { label: 'Polish Zloty (PLN)', value: 'PLN'},
            { label: 'Romanian Leu (RON)', value: 'RON'},
            { label: 'Swedish Krona (SEK)', value: 'SEK'},
            { label: 'Swiss Franc (CHF)', value: 'CHF'},
            { label: 'Icelandic Krona (ISK)', value: 'ISK'},
            { label: 'Norwegian Krone (NOK)', value: 'NOK'},
            { label: 'Croatian Kuna (HRK)', value: 'HRK'},
            { label: 'Russian Rouble (RUB)', value: 'RUB'},
            { label: 'Turkish Lira (TRY)', value: 'TRY'},
            { label: 'Australian Dollar (AUD)', value: 'AUD'},
            { label: 'Brazilian Real (BRL)', value: 'BRL'},
            { label: 'Canadian Dollar (CAD)', value: 'CAD'},
            { label: 'Chinese Yuan Renminbi (CNY)', value: 'CNY'},
            { label: 'Hong Kong Dollar (HKD)', value: 'HKD'},
            { label: 'Indonesian Rupiah (IDR)', value: 'IDR'},
            { label: 'Israeli Shekel (ILS)', value: 'ILS'},
            { label: 'Indian Rupee (INR)', value: 'INR'},
            { label: 'South Korean Won (KRW)', value: 'KRW'},
            { label: 'Mexican Peso (MXN)', value: 'MXN'},
            { label: 'Malaysian Ringgit (MYR)', value: 'MYR'},
            { label: 'New Zealand Dollar (NZD)', value: 'NZD'},
            { label: 'Philippine Peso (PHP)', value: 'PHP'},
            { label: 'Singapore Dollar (SGD)', value: 'SGD'},
            { label: 'Thai Baht (THB)', value: 'THB'},
            { label: 'South African Rand (ZAR)', value: 'ZAR'}
        ]"
        label="Da Moeda 1" />
        <q-btn
        push color="white"
        text-color="primary"
        label="Inverter"
        style="margin: 30px"
        @click="invert()"
        />
        {{model.date}}
        <q-select id="moeda2" class="col-3"
        rounded outlined
        v-model="model2"
        style="width: 251px"
        :options="[
            { label: 'US Dollar (USD)', value: 'USD'},
            { label: 'Japanese Yen (JPY)', value: 'JPY'},
            { label: 'Bulgarian Lev (BGN)', value: 'BGN'},
            { label: 'Czech Koruna (CZK)', value: 'CZK'},
            { label: 'Danish Krone (DKK)', value: 'DKK'},
            { label: 'Pound Sterling (GBP)', value: 'GBP'},
            { label: 'Hungarian Forint (HUF)', value: 'HUF'},
            { label: 'Polish Zloty (PLN)', value: 'PLN'},
            { label: 'Romanian Leu (RON)', value: 'RON'},
            { label: 'Swedish Krona (SEK)', value: 'SEK'},
            { label: 'Swiss Franc (CHF)', value: 'CHF'},
            { label: 'Icelandic Krona (ISK)', value: 'ISK'},
            { label: 'Norwegian Krone (NOK)', value: 'NOK'},
            { label: 'Croatian Kuna (HRK)', value: 'HRK'},
            { label: 'Russian Rouble (RUB)', value: 'RUB'},
            { label: 'Turkish Lira (TRY)', value: 'TRY'},
            { label: 'Australian Dollar (AUD)', value: 'AUD'},
            { label: 'Brazilian Real (BRL)', value: 'BRL'},
            { label: 'Canadian Dollar (CAD)', value: 'CAD'},
            { label: 'Chinese Yuan Renminbi (CNY)', value: 'CNY'},
            { label: 'Hong Kong Dollar (HKD)', value: 'HKD'},
            { label: 'Indonesian Rupiah (IDR)', value: 'IDR'},
            { label: 'Israeli Shekel (ILS)', value: 'ILS'},
            { label: 'Indian Rupee (INR)', value: 'INR'},
            { label: 'South Korean Won (KRW)', value: 'KRW'},
            { label: 'Mexican Peso (MXN)', value: 'MXN'},
            { label: 'Malaysian Ringgit (MYR)', value: 'MYR'},
            { label: 'New Zealand Dollar (NZD)', value: 'NZD'},
            { label: 'Philippine Peso (PHP)', value: 'PHP'},
            { label: 'Singapore Dollar (SGD)', value: 'SGD'},
            { label: 'Thai Baht (THB)', value: 'THB'},
            { label: 'South African Rand (ZAR)', value: 'ZAR'}
        ]"
        label="Para a Moeda 2" />
        {{getData(model.value, model2.value)}}
        <q-input class="col-3 col-xs-6"
        rounded outlined
        v-model="text"
        style="width: 1000px"
        label="Valor para conversão: "/>
        {{conversor()}}
        <q-input class="col-3 col-xs-6"
        rounded outlined
        v-model="resulta"
        style="margin: 30px"
        label="Resultado: "/>
    </q-page>
</template>

<script>
export default {
  name: 'CoinConversor',
  data () {
    return {
      data: null,
      resulta: null,
      text: '',
      model: '',
      model2: ''
    }
  },
  methods: {
    getData (moeda1, moeda2) {
      if (this.model.value && this.model2.value != null) {
        var axios = require('axios')
        axios.get('https://api.exchangeratesapi.io/latest?base=' + moeda1 + '&symbols=' + moeda2)
          .then((resultado) => {
            this.data = resultado.data.rates[moeda2]
          })
      }
    },
    conversor () {
      if (isNaN(this.text) === false || this.text == null) {
        this.resulta = (this.text * this.data).toFixed(2)
      } else {
        this.resulta = 'Erro! valor informado não é um numero, digite novamente.'
      }
    },
    invert () {
      if (this.model !== '' && this.model2 !== '') {
        var m1 = this.model
        var m2 = this.model2
        this.model = m2
        this.model2 = m1
      }
    }
  }
}
</script>

<style scoped>
</style>
