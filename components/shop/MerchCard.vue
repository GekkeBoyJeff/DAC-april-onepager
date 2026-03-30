<template>
  <div
    class="group relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg border border-dark-700 overflow-hidden transition-all duration-300 md:hover:border-primary-600/50 md:hover:shadow-xl md:hover:shadow-primary-900/40 md:hover:-translate-y-2 md:hover:scale-[1.02] animate-fade-in hover:cursor-hook"
  >
    <div class="absolute -inset-1 bg-gradient-to-r from-primary-600/0 via-primary-600/0 to-primary-600/0 md:group-hover:from-primary-600/20 md:group-hover:to-accent-blue/20 rounded-lg blur-lg opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    <div class="relative h-56 bg-dark-700 overflow-hidden flex items-center justify-center">
      <img
        :src="product.image"
        :alt="product.name"
        :class="[
          'w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110',
          isNsfwFigure ? 'blur-xl brightness-75' : ''
        ]"
        loading="lazy"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span
        v-if="isNsfwFigure"
        class="absolute top-2 right-2 text-[10px] px-2 py-1 rounded-full bg-black/70 text-dark-100 border border-dark-500 animate-pulse-soft"
      >
        NSFW preview geblurred
      </span>
    </div>
    <div class="p-4 space-y-3">
      <div class="flex gap-2">
        <span class="text-xs px-2.5 py-1 rounded-full bg-primary-900/40 text-primary-300 font-semibold group-hover:bg-primary-800/60 transition-colors duration-300">
          {{ product.category === 'merch' ? 'Winkel' : 'Game' }}
        </span>
      </div>
      <h3 class="font-display font-bold text-lg text-dark-100 line-clamp-2 group-hover:text-primary-300 transition-colors duration-300">
        {{ product.name }}
      </h3>
      <p class="text-sm text-dark-400 line-clamp-2">
        {{ product.description }}
      </p>
      <div class="flex items-end justify-between pt-2">
        <div @mouseenter="onPriceInteract" @click="onPriceInteract">
          <p class="text-xs text-dark-500 mb-1">Prijs</p>
          <p
            class="text-xl font-bold bg-gradient-to-r from-accent-gold to-accent-blue bg-clip-text text-transparent group-hover:animate-gradient-shift transition-all duration-300"
            :class="{ 'scale-110': justChanged }"
            style="background-size: 200% 200%"
          >
            {{ displayPrice }}
          </p>
        </div>
        <div class="relative">
          <Transition name="toast">
            <div
              v-if="showToast"
              class="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-dark-800 border border-primary-500/30 rounded-lg px-3 py-1.5 text-xs text-primary-300/90 shadow-lg z-10"
            >
              {{ toastText }}
            </div>
          </Transition>
          <button
            @click="addToCart"
            class="p-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/50 transform hover:scale-125 active:scale-95 relative overflow-hidden group/btn"
            :aria-label="`${product.name} toevoegen aan winkelmand`"
          >
            <span class="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-100 transition-transform duration-500 rounded-lg" />
            <svg class="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '~/types/shop'
import { useCartStore } from '~/stores/cartStore'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const cart = useCartStore()
const isNsfwFigure = props.product.id === 'amelia-figure'
const displayPrice = ref(props.product.priceDisplay)
const justChanged = ref(false)
const showToast = ref(false)
const toastText = ref('')
let interactCount = 0
let addCount = 0
let toastTimer: ReturnType<typeof setTimeout> | null = null

const toastsByProduct: Record<string, string[]> = {
  'amelia-figure': [
    'NSFW. In je winkelmand. In je hart. 💅',
    '€150 voor een 2D vrouw. Down astronomisch.',
    'Je browst incognito toch? Toch?? 🕵️',
    'De bezorger gaat vragen stellen.',
    'Geblurred maar je fantasie niet hè.',
    'Je hebt een type. En het is geanimeerd.',
    'Amelia is fictional. Net als je liefdesleven.',
    'Verzamelbaar! Zeg dat maar tegen je therapeut. 🚩',
    'Dit is het moment dat je even pauzeert. ...nee? oke.',
    'Je moeder belt. Neem. Niet. Op.',
    'Premium afwerking. Premium ontkenning.',
    'Je creditcard schreeuwt. Maar je klikt toch.',
    'Ah, een kenner van de cultuur. 🎩',
    'Ze is hand-painted. Jij bent hand-down bad.',
    'De douane gaat hier vragen over stellen.',
    'Figure staat op je bureau. Collega\'s stellen vragen.',
    'Je hebt dit niet nodig. Maar hier ben je.',
    '€150 is een koopje voor eeuwige schaamte.',
    'Ze kijkt recht in je ziel. En ze lacht.',
    'Dit is je villain origin story.',
    'Je zoekgeschiedenis is nu bewijs.',
    'Eerst de figure, dan de shrine. Klassiek.',
    'Levertijd: nooit. Maar dat wist je al.',
    'De sculpteur had medelijden. Met jou.',
    'Ze is 1:7 schaal. Je obsessie is 1:1.',
    'Je Amazon aanbevelingen zijn nu permanent geruïneerd.',
    'NSFW staat voor Niet Slim, Flink Wanhopig.',
    'Snap je die blur? Dat is de censuur op je smaak.',
    'Dit verklaart je Tinder resultaten.',
    'Je vrienden gaan dit zien. En zwijgen.',
    'Het is kunst. Blijf dat tegen jezelf zeggen.',
    'Zelfs de AI is verbaasd dat je doorgaat.',
    'Nog eentje? Je hebt ambitie. Twijfelachtige ambitie.',
    'De verpakking is discreet. Je browsing niet.',
    'Ergens is een algoritme trots op je.',
    'Dit is de duurste L die je ooit koopt.',
    'Fun fact: deze figure oordeelt je 24/7.',
    'Ze past perfect naast je eenzaamheid.',
    'Premium PVC. Premium cope.',
    'Gefeliciteerd. Dit staat nu in je cookies.',
  ],
  'amelia-body-pillow': [
    'Body pillow. Geen oordeel. Oke een beetje. 👀',
    'Inclusief kussen! Alsof dat het normaal maakt.',
    'Comfortabel slapen met je keuzes.',
    'De kussensloop is wasbaar. Je reputatie niet.',
    'Netflix and... pillow? 🛋️',
    'Two-sided? Net als je persoonlijkheid.',
    'Amelia houdt je warm. Emotioneel dan.',
    'Perfecte valentijnsdeal. Voor jezelf. 💕',
    'Eén is gezelschap. Twee is een interventie.',
    'De AI heeft je browsing history gezien. Dit past.',
    'Knuffelbaar formaat. Net als je onzekerheid.',
    'Je bed was al teleurstellend. Dit helpt niet.',
    'Ze zegt nooit nee. Want ze is een kussen.',
    'Pillow talk, maar dan letterlijk.',
    '150cm troost voor een paar tientjes.',
    'Je huisgenoot gaat vragen stellen. Bereid je voor.',
    'Ergonomisch verantwoord. Sociaal niet.',
    'Kussensloop met rits. Net als je emotionele bagage.',
    'Wassen op 30 graden. Net als je geweten.',
    'Ze neemt geen ruimte in. Alleen op je bankrekening.',
    'De postbode weet het. De buurvrouw weet het.',
    'Dit is een coping mechanism en dat is oke.',
    'Eén voor elke kant van het bed. Efficiënt.',
    'Body pillow meta is nu canon.',
    'Dit kussen heeft meer commitment dan je ex.',
    'Amelia is altijd de grote lepel. Deal with it.',
    'Pro tip: niet meenemen naar familie-etentjes.',
    'Ze is hypoallergeen. In tegenstelling tot je keuzes.',
    'Cotton blend. Tears blend.',
    'Je Bol.com suggesties zijn nu cursed.',
    'Je deed alsof je twijfelde. Schattig.',
    'Inclusief cover art. Exclusief waardigheid.',
    'Dit kussen oordeelt niet. Wij wel.',
    'De AI adviseert: neem matching dekbedovertrek.',
    'Je hebt nu officieel een waifu. Gefeliciteerd.',
    'Dit is een lifestyle keuze. Een discutabele.',
    'Huilen in je body pillow hits different.',
    'Ze is er altijd voor je. Want ze kan niet weg.',
    'Machinevriendelijk. Samenlevingsonvriendelijk.',
    'Dit past niet door je voordeur qua uitleg.',
  ],
  'amelia-dating-sim': [
    'Een dating sim voor €3. Koopje van de eeuw. 🎮',
    'Eindelijk: een date die niet cancelt.',
    'AI-driven romance. Wat kan er misgaan.',
    'Goedkoper dan Tinder Premium. Effectiever ook.',
    'Plot twist: Amelia dumpt je in chapter 3.',
    'Visual novel. Benadrukt: novel. Niet echt.',
    'Je eerste date met AI. Of toch niet? 🤔',
    'Steam achievement unlocked: down bad.',
    'Amelia\'s route is locked achter je tranen.',
    'Interactieve romance! Maar dan zonder de romance.',
    '€3 is minder dan een koffie. Meer dan je waardigheid.',
    'Save scumming telt niet als commitment.',
    'Bad ending unlocked: je koopt dit echt.',
    'De good ending is stoppen. Maar hier ben je.',
    'Multiple routes! Allemaal teleurstellend.',
    'Dit is goedkoper dan therapie. En minder effectief.',
    'Visual novel speedrun any% emotionele schade.',
    'Je choices matteren. In het spel dan.',
    'Amelia remembers. Alles. Altijd. 👁️',
    'Chapter 1: hoop. Chapter 5: reality check.',
    'De soundtrack slaps harder dan de waarheid.',
    'CG gallery unlocken is geen persoonlijkheid.',
    'Dit spel heeft meer plottwists dan je liefdeleven.',
    'Beschikbaar voor Windows en macOS. Niet voor je ego.',
    'True ending vereist alle bad endings eerst. Herkenbaar.',
    'De dialoogopties zijn beter dan je pickup lines.',
    'Amelia\'s affection meter > je zelfrespect meter.',
    'Visual novel enjoyer is geen dating profiel bio.',
    '€3 voor emotionele afhankelijkheid. Efficiënt.',
    'Dit spel kent je beter dan je beste vriend.',
    'Je romantische ervaring past nu op een USB stick.',
    'Auto-mode aan. Net als je emotionele piloot.',
    'Skip button bestaat. Maar je leest elk woord hè.',
    'Amelia route NG+ voor de masochisten.',
    'Dit telt niet als relatie-ervaring op je CV.',
    'De game is kort. Net als je aandachtsspanne.',
    'Voice acting niet inbegrepen. Gebruik je verbeelding.',
    'Je Steam library oordeelt. Hard.',
    'Nog een playthrough? Glutton for punishment.',
    'De credits rollen. Je bent alleen. Niets veranderd.',
  ],
  'dac-trading-coin': [
    'Crypto, maar dan nog nepperder. 🪙',
    'Prijs: pi euro. Wiskundig verantwoord wanbetalen.',
    'To the moon! (de munt bestaat niet) 🚀',
    'Limited edition! Net als je geduld.',
    'De blockchain heeft hier niks mee te maken.',
    'HODLen heeft geen zin. Maar doe het toch.',
    'NFT vibes zonder de NFT. Of de vibes.',
    'Gelimiteerd! Oneindig gelimiteerd, eigenlijk.',
    'Warren Buffett belt. Hij hangt op.',
    'Investeer in je toekomst! (niet financieel advies) 📈',
    'Dit is letterlijk een grap. Je koopt een grap.',
    'Market cap: €0. Potentie: ook €0.',
    'De munt is fysiek. De waarde niet.',
    'Decentralized teleurstelling.',
    'Whitepaper: "lol".',
    'DYOR. (spoiler: het is nep)',
    'Staking rewards: existentiële twijfel.',
    'Buy the dip! De dip is de bodem. Er is geen bodem.',
    'Mining difficulty: onmogelijk. Want het is een munt.',
    'Je portfolio diversifiëren met pure wanhoop.',
    'Tokenomics: 100% vibes, 0% waarde.',
    'Gas fees: je waardigheid.',
    'De devs zijn anonymous. Want ze bestaan niet.',
    'Roadmap Q4: lachen om kopers.',
    'Rug pull? Er was nooit een rug.',
    'Paper hands? Je hebt letterlijk papier gekocht.',
    'Dit is de financial advice die je verdient.',
    'Circulating supply: precies genoeg om je te pesten.',
    'Smart contract: "als koper → dan clown".',
    'De chart gaat alleen naar rechts. Niet omhoog.',
    'Pi euro. Omdat normale prijzen te mainstream zijn.',
    'Proof of Stake? Proof of Slechte Keuzes.',
    'Je exchange account huilt.',
    'Elon tweet hier niet over. Nobody does.',
    'De munt glimt wel. Dat is iets.',
    'Numismatisch interessant. Financieel nutteloos.',
    'Verzamelwaarde: sentimenteel. Monetair: nul.',
    'Je vertelt dit niet aan je financial advisor.',
    'Diamond hands! (het is zirkonia)',
    'Welkom bij de club. De club heeft geen voordelen.',
  ],
}

const fallbackToasts = [
  'Goede keuze. Nee echt. 💀',
  'Bold. Heel bold.',
  'De AI approves. Niet dat het uitmaakt.',
]

const getToasts = () => toastsByProduct[props.product.id] || fallbackToasts

const onPriceInteract = () => {
  interactCount++
  if (interactCount >= 2) {
    const inflated = props.product.price * (1 + interactCount * 0.15)
    displayPrice.value = new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(inflated)
    // Brief scale pop on change
    justChanged.value = true
    setTimeout(() => { justChanged.value = false }, 300)
  }
}

const addToCart = () => {
  cart.addItem(props.product, 1)
  const productToasts = getToasts()
  let pick = productToasts[Math.floor(Math.random() * productToasts.length)]
  while (pick === toastText.value && productToasts.length > 1) {
    pick = productToasts[Math.floor(Math.random() * productToasts.length)]
  }
  toastText.value = pick
  showToast.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { showToast.value = false }, 3500)
}
</script>

<style scoped>
.toast-enter-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.toast-leave-active {
  transition: all 0.2s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(6px) scale(0.9);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
