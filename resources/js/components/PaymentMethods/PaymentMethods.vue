<template>
  <div class="payment-methods">
    <h2 class="payment-methods__title">Modes de paiements acceptés</h2>
    <div class="payment-methods__body">
      <div class="payment-methods__body__content payment-methods__body__content--border-right">
        <div class="payment-methods__body__content__image">
          <img src="../../assets/icons/payment-methods/credit-card.png" alt="Paiment par carte bancaire">
        </div>
        <p class="payment-methods__body__content__description">Paiement par carte VISA / Mastercard</p>
      </div>
      <div class="payment-methods__body__content payment-methods__body__content--border-right">
        <div class="payment-methods__body__content__image">
          <img src="../../assets/icons/payment-methods/ticket.png" alt="Paiment par ticket restaurant">
        </div>
        <p class="payment-methods__body__content__description">Tickets restaurant / Tickets repas</p>
      </div>
      <div class="payment-methods__body__content payment-methods__body__content--border-right">
        <div class="payment-methods__body__content__image">
          <img src="../../assets/icons/payment-methods/money.png" alt="Paiment par espèces">
        </div>
        <p class="payment-methods__body__content__description">Espèces</p>
      </div>
      <div class="payment-methods__body__content">
        <div class="payment-methods__body__content__image">
          <img src="../../assets/icons/payment-methods/amex.png" alt="Paiment par AMEX">
        </div>
        <p class="payment-methods__body__content__description">AMEX</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payment-methods',
}
</script>