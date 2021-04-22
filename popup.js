// initialize button
let convertButton = document.getElementById('convertButton');

// click the button to make it work!
convertButton.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // programatic injection allows for user-invoked content scripts
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: convertToWeight,
  });
});

// The body of this function will be executed as a content script INSIDE the current page
function convertToWeight() {
  // data

  // load the weightchart here, though it feels hacky!
  const weightchart = {
    "'00' pizza flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 116
    },
    "all-purpose flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "almond flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/8",
      "Grams": 96
    },
    "almond meal": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 84
    },
    "almond paste (packed)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "9 1/8",
      "Grams": 259
    },
    "almonds (sliced)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "1 1/2",
      "Grams": 43
    },
    "almonds (slivered)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 2,
      "Grams": 57
    },
    "almonds, whole (unblanched)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "amaranth flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 5/8",
      "Grams": 103
    },
    "apples (dried, diced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "apples (peeled, sliced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "applesauce": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 9,
      "Grams": 255
    },
    "apricots (dried, diced)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 1/4",
      "Grams": 64
    },
    "artisan bread flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "artisan bread topping": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 1/2",
      "Grams": 43
    },
    "baker's cinnamon filling": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 3/8",
      "Grams": 152
    },
    "baker's fruit blend": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/2",
      "Grams": 128
    },
    "baker's special sugar (superfine sugar, castor sugar)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "6 3/4",
      "Grams": 190
    },
    "baking powder": {
      'volumeAmount': 1,
      'volumeUnit': 'teaspoon',
      "Ounces": "",
      "Grams": 4
    },
    "baking soda": {
      'volumeAmount': .5,
      'volumeUnit': 'teaspoon',
      "Ounces": "",
      "Grams": 3
    },
    "baking sugar alternative": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "bananas (mashed)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "barley (cooked)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "7 5/8",
      "Grams": 215
    },
    "barley (pearled)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "7 1/2",
      "Grams": 213
    },
    "barley flakes": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "1 5/8",
      "Grams": 46
    },
    "barley flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "basil pesto": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": 1,
      "Grams": 28
    },
    "bell peppers (fresh)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "berries (frozen)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "blueberries (dried)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/2",
      "Grams": 156
    },
    "blueberries (fresh)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "blueberry juice": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "8 1/2",
      "Grams": 241
    },
    "boiled cider": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "bran cereal": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "2 1/8",
      "Grams": 60
    },
    "bread crumbs (dried)": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 1,
      "Grams": 28
    },
    "bread crumbs (fresh)": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "3/4",
      "Grams": 21
    },
    "bread crumbs (japanese panko)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "1 3/4",
      "Grams": 50
    },
    "bread flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "brown rice (cooked)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "brown rice flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/2",
      "Grams": 128
    },
    "brown sugar (dark or light, packed)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "7 1/2",
      "Grams": 213
    },
    "buckwheat (whole)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "buckwheat flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "bulgur": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 3/8",
      "Grams": 152
    },
    "butter": {
      'volumeAmount': 8,
      'volumeUnit': 'tablespoons',
      "Ounces": 4,
      "Grams": 113
    },
    "buttermilk": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "buttermilk powder": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "2/3",
      "Grams": 18
    },
    "cacao nibs": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "cake enhancer": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "1/2",
      "Grams": 14
    },
    "candied peel": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "caramel (14-16 individual pieces, 1\" squares)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "caramel bits (chopped heath or toffee)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/2",
      "Grams": 156
    },
    "caraway seeds": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "5/8",
      "Grams": 18
    },
    "carrots (cooked and puréed)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "4 1/2",
      "Grams": 128
    },
    "carrots (diced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "carrots (grated)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 1/2",
      "Grams": 99
    },
    "cashews (chopped)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "cashews (whole)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "celery (diced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "cheese (feta)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 2,
      "Grams": 57
    },
    "cheese (grated cheddar, jack, mozzarella, or swiss)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "cheese (grated parmesan)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "1 3/4",
      "Grams": 50
    },
    "cheese (ricotta)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "cherries (candied)": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 3/4",
      "Grams": 50
    },
    "cherries (dried)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 1/2",
      "Grams": 71
    },
    "cherries (fresh, pitted, chopped)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 7/8",
      "Grams": 80
    },
    "cherries (frozen)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "chickpea flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "chives (fresh)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "3/4",
      "Grams": 21
    },
    "chocolate (chopped)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "chocolate chips": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "chocolate chunks": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "cinnamon sweet bits": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 140
    },
    "cinnamon-sugar": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 3/4",
      "Grams": 50
    },
    "cocoa powder (unsweetened)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "1 1/2",
      "Grams": 42
    },
    "coconut (sweetened, shredded)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "coconut (toasted)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "coconut (unsweetened, desiccated)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "coconut (unsweetened, large flakes)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "2 1/8",
      "Grams": 60
    },
    "coconut (unsweetened, shredded)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "1 7/8",
      "Grams": 53
    },
    "coconut flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/2",
      "Grams": 128
    },
    "coconut milk powder": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 2,
      "Grams": 57
    },
    "coconut oil": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "coconut sugar": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 3/4",
      "Grams": 77
    },
    "confectioners' sugar (unsifted)": {
      'volumeAmount': 2,
      'volumeUnit': 'cups',
      "Ounces": 8,
      "Grams": 227
    },
    "cookie crumbs": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "corn (popped)": {
      'volumeAmount': 4,
      'volumeUnit': 'cups',
      "Ounces": "3/4",
      "Grams": 21
    },
    "corn syrup": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 11,
      "Grams": 312
    },
    "cornmeal (whole)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 7/8",
      "Grams": 138
    },
    "cornmeal (yellow, quaker)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/2",
      "Grams": 156
    },
    "cornstarch": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 1,
      "Grams": 28
    },
    "cracked wheat": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/4",
      "Grams": 149
    },
    "cranberries (dried)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 2,
      "Grams": 57
    },
    "cranberries (fresh or frozen)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 1/2",
      "Grams": 99
    },
    "cream (heavy cream, light cream, or half & half)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "cream cheese": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "crystallized ginger": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "3 1/4",
      "Grams": 92
    },
    "currants": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "dates (chopped)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/4",
      "Grams": 149
    },
    "demerara sugar": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "7 3/4",
      "Grams": 220
    },
    "dried blueberry powder": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 1,
      "Grams": 28
    },
    "dried milk (baker's special dry milk)": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 1,
      "Grams": 28
    },
    "dried nonfat milk (powdered)": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 1,
      "Grams": 28
    },
    "dried potato flakes (instant mashed potatoes)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "1 1/2",
      "Grams": 43
    },
    "dried whole milk (powdered)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "1 3/4",
      "Grams": 50
    },
    "durum flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 3/8",
      "Grams": 124
    },
    "easy roll dough improver": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "5/8",
      "Grams": 18
    },
    "egg (fresh)": {
      'volumeAmount': 1,
      'volumeUnit': 'large',
      "Ounces": "1 3/4",
      "Grams": 50
    },
    "egg white (fresh)": {
      'volumeAmount': 1,
      'volumeUnit': 'large',
      "Ounces": "1 1/4",
      "Grams": 35
    },
    "egg whites (dried)": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "3/8",
      "Grams": 11
    },
    "egg yolk (fresh)": {
      'volumeAmount': 1,
      'volumeUnit': 'large',
      "Ounces": "1/2",
      "Grams": 14
    },
    "espresso powder": {
      'volumeAmount': 1,
      'volumeUnit': 'tablespoon',
      "Ounces": "1/4",
      "Grams": 7
    },
    "everything bagel topping": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 1/4",
      "Grams": 35
    },
    "figs (dried, chopped)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/4",
      "Grams": 149
    },
    "first clear flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/4",
      "Grams": 106
    },
    "flax meal": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "1 3/4",
      "Grams": 50
    },
    "flaxseed": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 1/4",
      "Grams": 35
    },
    "french-style flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "fruitcake fruit blend": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "garlic (cloves, in skin for roasting)": {
      "Volume": "1 large head",
      "Ounces": 4,
      "Grams": 113
    },
    "garlic (minced)": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": 1,
      "Grams": 28
    },
    "garlic (peeled and sliced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/4",
      "Grams": 149
    },
    "ginger (fresh, sliced)": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 2,
      "Grams": 57
    },
    "gluten-free all-purpose baking mix": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "gluten-free all-purpose flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/2",
      "Grams": 156
    },
    "gluten-free measure for measure flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "graham cracker crumbs (boxed)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 1/2",
      "Grams": 99
    },
    "graham crackers (crushed)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "granola": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "grape nuts": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 2,
      "Grams": 57
    },
    "harvest grains blend": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 5/8",
      "Grams": 74
    },
    "hazelnut flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 1/8",
      "Grams": 89
    },
    "hazelnut praline paste": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "5 1/2",
      "Grams": 156
    },
    "hazelnut spread": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "5 5/8",
      "Grams": 160
    },
    "hazelnuts (whole)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "hi-maize natural fiber": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 1/8",
      "Grams": 32
    },
    "high-gluten flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "honey": {
      'volumeAmount': 1,
      'volumeUnit': 'tablespoon',
      "Ounces": "3/4",
      "Grams": 21
    },
    "instant clearjel": {
      'volumeAmount': 1,
      'volumeUnit': 'tablespoon',
      "Ounces": "3/8",
      "Grams": 11
    },
    "irish-style flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 7/8",
      "Grams": 110
    },
    "italian-style flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/4",
      "Grams": 106
    },
    "jam or preserves": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "jammy bits": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "6 1/2",
      "Grams": 184
    },
    "keto wheat flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "key lime juice": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "lard": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "leeks (diced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 1/4",
      "Grams": 92
    },
    "lemon juice powder": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "5/8",
      "Grams": 18
    },
    "lime juice powder": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "5/8",
      "Grams": 18
    },
    "macadamia nuts (whole)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/4",
      "Grams": 149
    },
    "malt syrup": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "1 1/2",
      "Grams": 43
    },
    "malted milk powder": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 1/4",
      "Grams": 35
    },
    "malted wheat flakes": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 1/4",
      "Grams": 64
    },
    "maple sugar": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 3/4",
      "Grams": 78
    },
    "maple syrup": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "5 1/2",
      "Grams": 156
    },
    "marshmallow crème": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "marshmallow fluff®": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/2",
      "Grams": 128
    },
    "marshmallows (mini)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "1 1/2",
      "Grams": 43
    },
    "marzipan": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "10 1/8",
      "Grams": 290
    },
    "mascarpone cheese": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "mashed potatoes": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "7 1/2",
      "Grams": 213
    },
    "mayonnaise": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "medium rye flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/4",
      "Grams": 106
    },
    "meringue powder": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 1/2",
      "Grams": 43
    },
    "milk (evaporated)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "milk (fresh)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "millet (whole)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "3 5/8",
      "Grams": 103
    },
    "mini chocolate chips": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "6 1/4",
      "Grams": 177
    },
    "molasses": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "mushrooms (sliced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "2 3/4",
      "Grams": 78
    },
    "non-diastatic malt powder": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "5/8",
      "Grams": 18
    },
    "oat bran": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "1 7/8",
      "Grams": 53
    },
    "oat flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 1/4",
      "Grams": 92
    },
    "oats (old-fashioned or quick-cooking)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 1/8",
      "Grams": 89
    },
    "olive oil": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 3/4",
      "Grams": 50
    },
    "olives (sliced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "onions (fresh, diced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "paleo baking flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 5/8",
      "Grams": 104
    },
    "palm shortening": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 1/2",
      "Grams": 45
    },
    "pasta flour blend": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/8",
      "Grams": 145
    },
    "pastry flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/4",
      "Grams": 106
    },
    "pastry flour blend": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "peaches (peeled and diced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "peanut butter": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "4 3/4",
      "Grams": 135
    },
    "peanuts (whole, shelled)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "pears (peeled and diced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 3/4",
      "Grams": 163
    },
    "pecan meal": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "2 3/4",
      "Grams": 80
    },
    "pecans (diced)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 2,
      "Grams": 57
    },
    "pie filling enhancer": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 5/8",
      "Grams": 46
    },
    "pine nuts": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 1/2",
      "Grams": 71
    },
    "pineapple (dried)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 1/2",
      "Grams": 71
    },
    "pineapple (fresh or canned, diced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "pistachio nuts (shelled)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 1/8",
      "Grams": 60
    },
    "pistachio paste": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "2 3/4",
      "Grams": 78
    },
    "pizza dough flavor": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "",
      "Grams": 12
    },
    "pizza flour blend": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 3/8",
      "Grams": 124
    },
    "polenta (coarse ground cornmeal)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 3/4",
      "Grams": 163
    },
    "poppy seeds": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "5/8",
      "Grams": 18
    },
    "potato flour": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 5/8",
      "Grams": 46
    },
    "potato starch": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 3/8",
      "Grams": 152
    },
    "pumpernickel flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/4",
      "Grams": 106
    },
    "pumpkin purée": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "quinoa (cooked)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "6 1/2",
      "Grams": 184
    },
    "quinoa (whole)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "6 1/4",
      "Grams": 177
    },
    "quinoa flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 7/8",
      "Grams": 110
    },
    "raisins (loose)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/4",
      "Grams": 149
    },
    "raisins (packed)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 3,
      "Grams": 85
    },
    "raspberries (fresh)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "rhubarb (sliced, 1/2\" slices)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "rice (long grain, dry)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "3 1/2",
      "Grams": 99
    },
    "rice flour (white)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 5,
      "Grams": 142
    },
    "rice krispies": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 1,
      "Grams": 28
    },
    "rye bread improver": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "",
      "Grams": 14
    },
    "rye chops": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "rye flakes": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 3/8",
      "Grams": 124
    },
    "rye flour blend": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/4",
      "Grams": 106
    },
    "salt (kosher, diamond crystal)": {
      'volumeAmount': 1,
      'volumeUnit': 'tablespoon',
      "Ounces": "",
      "Grams": 8
    },
    "salt (kosher, morton's)": {
      'volumeAmount': 1,
      'volumeUnit': 'tablespoon',
      "Ounces": "",
      "Grams": 16
    },
    "salt (table)": {
      'volumeAmount': 1,
      'volumeUnit': 'tablespoon',
      "Ounces": "",
      "Grams": 18
    },
    "scallions (sliced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "2 1/4",
      "Grams": 64
    },
    "self-rising flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "semolina flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 3/4",
      "Grams": 163
    },
    "sesame seeds": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 1/2",
      "Grams": 71
    },
    "shallots (peeled and sliced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/2",
      "Grams": 156
    },
    "six-grain blend": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/2",
      "Grams": 128
    },
    "sorghum flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 7/8",
      "Grams": 138
    },
    "sour cream": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "sourdough starter": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "8 to 8 1/2",
      "Grams": "227 to 241"
    },
    "soy flour": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 1/4",
      "Grams": 35
    },
    "sparkling sugar": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 2,
      "Grams": 57
    },
    "spelt flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 1/2",
      "Grams": 99
    },
    "sprouted wheat flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "steel cut oats": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 1/2",
      "Grams": 70
    },
    "sticky bun sugar": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 1/2",
      "Grams": 99
    },
    "strawberries (fresh sliced)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 7/8",
      "Grams": 167
    },
    "sugar (granulated white)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 7,
      "Grams": 198
    },
    "sugar substitute (splenda)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "7/8",
      "Grams": 25
    },
    "sundried tomatoes (dry pack)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "sunflower seeds": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 1/4",
      "Grams": 35
    },
    "super 10 blend": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/4",
      "Grams": 106
    },
    "sweetened condensed milk": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "2 3/4",
      "Grams": 78
    },
    "tahini paste": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "4 1/2",
      "Grams": 128
    },
    "tapioca starch or flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "tapioca (quick cooking)": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "3/4",
      "Grams": 21
    },
    "teff flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 3/4",
      "Grams": 135
    },
    "the works bread topping": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 1/4",
      "Grams": 35
    },
    "toasted almond flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/8",
      "Grams": 96
    },
    "toffee chunks": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "5 1/2",
      "Grams": 156
    },
    "tropical fruit blend": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/2 to 5",
      "Grams": "128 to 142"
    },
    "turbinado sugar (raw)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "6 3/8",
      "Grams": 180
    },
    "unbleached cake flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4",
      "Grams": 120
    },
    "vanilla extract": {
      'volumeAmount': 1,
      'volumeUnit': 'tablespoon',
      "Ounces": "1/2",
      "Grams": 14
    },
    "vegetable oil": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 7,
      "Grams": 198
    },
    "vegetable shortening": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": "1 5/8",
      "Grams": 46
    },
    "vermont cheese powder": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": 2,
      "Grams": 57
    },
    "vital wheat gluten": {
      'volumeAmount': 2,
      'volumeUnit': 'tablespoons',
      "Ounces": "5/8",
      "Grams": 18
    },
    "walnuts (chopped)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "walnuts (whole)": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "2 1/4",
      "Grams": 64
    },
    "water": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "wheat berries (red)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "6 1/2",
      "Grams": 184
    },
    "wheat bran": {
      'volumeAmount': .5,
      'volumeUnit': 'cup',
      "Ounces": "1 1/8",
      "Grams": 32
    },
    "wheat germ": {
      'volumeAmount': .25,
      'volumeUnit': 'cup',
      "Ounces": 1,
      "Grams": 28
    },
    "white chocolate chips": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 6,
      "Grams": 170
    },
    "white rye flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/4",
      "Grams": 106
    },
    "white whole wheat flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "whole grain flour blend": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "whole wheat flour (premium 100%)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 4,
      "Grams": 113
    },
    "whole wheat pastry flour / graham flour": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "3 3/8",
      "Grams": 96
    },
    "yeast (instant)": {
      'volumeAmount': 2.25,
      'volumeUnit': 'teaspoons',
      "Ounces": "1/4",
      "Grams": 7
    },
    "yogurt": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": 8,
      "Grams": 227
    },
    "zucchini (shredded)": {
      'volumeAmount': 1,
      'volumeUnit': 'cup',
      "Ounces": "4 1/4 to 5 1/4",
      "Grams": "121 to 150"
    }
  };

  const teaspoonEquivalents = {
    'tablespoon': 3,
    'teaspoon': 1,
    'cup': 3*4*4, // three teaspoons in a tablespoon, 4 tablespoons in a 1/4 cup
    'gallon': 3*4*4*16, // 16 cups in a gallon
    'pint': 3*4*4*2, // 2 cups in a pint
    'quart': 3*4*4*4, // 4 cups in a quart
    'fluid ounce': 3*2,
  };
  
  const standardVolUnits = {
    'tablespoons': 'tablespoon',
    'tablespoon': 'tablespoon',
    'tbsp': 'tablespoon',
    'tbsps': 'tablespoon',
    'T': 'tablespoon',

    'teaspoons': 'teaspoon',
    'teaspoon': 'teaspoon',
    'tsp': 'teaspoon',
    'tsps': 'teaspoon',
    't': 'teaspoon',

    'cup': 'cup',
    'cups': 'cup',
    'C': 'cup',

    'gallon': 'gallon',
    'gallons': 'gallon',

    'pint': 'pint',
    'pints': 'pint',

    'quart': 'quart',
    'quarts': 'quart',

    'fluid ounce': 'fluid ounce',
    'fluid ounces': 'fluid ounce',
    'fluid oz': 'fluid ounce',
    'fl oz': 'fluid ounce',
  };

  // TODO: how does this work for eggs? Does it actually work or does it just fail silently?

  const fractionValues = { // TODO: use the reverse dictionary (swap entries and keys) to convert to fractions!
    188: 1/4,
    189: 1/2,
    190: 3/4,
    8531: 1/3,
    8532: 2/3,
    8533: 1/5,
    8534: 2/5,
    8535: 3/5,
    8536: 4/5,
    8537: 1/6,
    8538: 5/6,
    8539: 1/8,
    8540: 3/8,
    8541: 5/8,
    8542: 7/8,
    8528: 1/7,
    8529: 1/9,
    8530: 1/10,
  };

  // helper functions
  function convertVolume(amount, startUnit, targetUnit) {
    /*
    amount: number
    startUnit: string
    targetUnit: string
    */

    // is startUnit in units?
    if ((startUnit in standardVolUnits) & (targetUnit in standardVolUnits)) {
      // startUnit -> teaspoons
      const startStandardUnit = standardVolUnits[startUnit];
      const tspAmount = amount * teaspoonEquivalents[startStandardUnit];

      // teaspoons -> targetUnit
      const targetStandardUnit = standardVolUnits[targetUnit];
      const newAmount = tspAmount / teaspoonEquivalents[targetStandardUnit];

      return [newAmount, targetUnit];
    } else {
      return [amount, startUnit];
    }
  }

  function convertToGrams(amount, gramsPerVol, volAmount = 1) {
    return amount/volAmount * gramsPerVol;
  }

  function splitIntoWords(str) {
    const regexp = /[a-zA-Z]+/g;

    const array = [...str.matchAll(regexp)];
    const result = array.map(x => x[0].toLowerCase());

    return result;
  }

  function returnMaxEntry (obj) {
    // iterates through object entries and returns the key/value pair with the highest value.
    // If more than one entry has the same highest value it returns the first one it evaluates.
    let max = ['none', -Infinity];
    for (const [key, value] of Object.entries(obj)) {
      if (value > max[1]) {
        // it's the new max
        max = [key, value];
        // console.log(`The max so far is ${key}: ${value}`);
      }
    }
    if (max[1] > -Infinity) {
      return max;
    }
    // TODO: check if I want this to silently fail.
  }

  function isEmpty(obj) {
    for(var i in obj) return false; 
    return true;
  }

  function findIngredient(recipeIngredient) {

    // iterate through weightchart
    for (const chartIngredient in weightchart) {
      // first look for an exact match
      if (chartIngredient === recipeIngredient) {
        return {chartIngredient, ...weightchart[chartIngredient]};
      }
    }

    // no exact match, so look for matching words
    const recipeWords = splitIntoWords(recipeIngredient);

    const matches = {};

    

    for (const chartIngredient in weightchart) {
      const chartWords = splitIntoWords(chartIngredient) // TODO: add this to the chart itself, there's no need to do it over and over.

      // TODO: change this to a reduce function? Or something like that?

      // count the number of times words match
      const tally = recipeWords.filter(word => chartWords.includes(word)).length;
      if (tally > 0) {
        // add to matches
        matches[chartIngredient] = tally;
      }

      // let tally = 0;
      // for (recipeWord in recipeWords) { // recipeWord is the key: 0, 1, 2, ... I want the word itself! TODO
      //   console.log(`Searching for the word ${recipeWords[recipeWord]}`);
      //   if (recipeWords[recipeWord].toLowerCase() in chartWords) {
      //     tally += 1;
      //   }
      // }
      // if (tally >= 1) {
      //   matches[chartIngredient] = tally;
      // }
    }
    // return matches;
    // console.table(matches);

    // best match
    if (!isEmpty(matches)) {
      const bestMatch = returnMaxEntry(matches)[0];
      console.log(`Best match: ${bestMatch}`);
      return {bestMatch, ...weightchart[bestMatch]};
    }

  }

  function removeParenthetical(str) {
    const regex = new RegExp(/(.+) \(.+\)/, 'gm');
    if ((result = regex.exec(str)) !== null) {
      return result[1];
    } else {
      return str;
    }
  }

  // TODO: strip all non-word characters when searching
  // TODO: figure out why "flavorless oil (canola oil/coconut oil/sunflower oil)" matches "coconut (sweetened, shredded)"
  // TODO: (this is a big one) allow user to choose from multiple matches

  function amountToNumber(str) {
    // TODO: fix bug 11/2 --> 0.5

    const integerPattern = new RegExp(/^(?<integer>^\d+)$/, 'gm');
    const decimalPattern = new RegExp(/^(?<decimal>\d*\.\d+)/, 'gm');
    const vulgarPattern = new RegExp(/^(?<integer>\d+)? ?(?<vulgar>[¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅐⅑⅒])$/, 'gm');
    const fractionPattern = new RegExp(/^((?<integer>\d+)? )?((?<numerator>\d+)\/(?<denominator>\d+))$/, 'gm');
    
    // TODO: Consider moving the regex down so they don't all get run every time (not sure if it matters, but maybe better performance?)
    const integerParts = integerPattern.exec(str);
    if (integerParts) {
      return parseInt(integerParts['groups']['integer']);
    }

    const decimalParts = decimalPattern.exec(str);
    if (decimalParts) {
      return parseFloat(decimalParts['groups']['decimal']);
    }
    

    const fractionParts = fractionPattern.exec(str);
    if (fractionParts) {
      let result = 0;
      if (fractionParts['groups']['integer']) {
        result += parseInt(fractionParts['groups']['integer']);
      }
      if (fractionParts['groups']['numerator'] && fractionParts['groups']['denominator']) {
        result += (parseInt(fractionParts['groups']['numerator']) / parseInt(fractionParts['groups']['denominator']));
        return result;
      }
    }
    
    const vulgarParts = vulgarPattern.exec(str);
    if (vulgarParts) {
      let result = 0;

      if (vulgarParts['groups']['integer']) {
        result += parseInt(vulgarParts['groups']['integer']);
      }
      if (vulgarParts['groups']['vulgar']) {
        // look up with unicode
        let code = vulgarParts['groups']['vulgar'].charCodeAt(0);
        result += fractionValues[code];
        return result;
      }
    }

    // TODO: return an error if you get this far, don't just fail silently!

  }

  // find the ingredients and highlight them
  const listItems = document.body.querySelectorAll('li');

  let ingredients = [];

  // TODO: figure out why amountPattern is here and delete if it's not necessary.
  const amountPattern = new RegExp(/^(?<decimal>\d*\.\d+)?(?<integer>\d+)? ?((?<numerator>\d+)\/(?<denominator>\d+))?(?<vulgar>[¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅐⅑⅒])?$/, 'gm');


  // TODO: add range? '## to ##' or '##–##'

  // TODO: ingredients aren't always the textContent of an li. Try searching all text for ^^ where unit is a volume unit instead?
  

  // grab the ingredients
  for (const listItem of listItems) {

    const ingpattern = new RegExp(/^(?<amount>(?:[\d\.]+)? ?(?:\d\/\d)?[¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅐⅑⅒]?) (?<unit>\w+) (?<ingredient>.*)$/, 'gm')
    let array1;

    // does it match the pattern?
    if ((array1 = ingpattern.exec(listItem.textContent)) !== null) {

      let ingInfo;
      // see if it's in the weightchart
      if ((ingInfo = findIngredient(array1['groups']['ingredient'])) !== null ) {
        console.table(ingInfo);

        // amount
        let amount = amountToNumber(array1['groups']['amount'].trim());
        let startUnit = array1['groups']['unit'].trim();
        [amount, unit] = convertVolume(amount, startUnit, ingInfo['volumeUnit']);
        let grams = convertToGrams(amount, ingInfo['Grams'], ingInfo['volumeAmount']);
        const chartIngredient = ingInfo['chartIngredient'] || ingInfo['bestMatch'];

        // split into spans
        const numberNode = document.createElement('span');
        numberNode.classList.add('C2Wnumber');
        numberNode.textContent = grams;
        numberNode.style.fontWeight = 'bold';

        const unitNode = document.createElement('span');
        unitNode.classList.add('C2Wunit');
        unitNode.textContent = ' '.concat('g', ' ');
        unitNode.style.fontWeight = 'bold';

        const ingredientNode = document.createElement('span');
        ingredientNode.classList.add('C2Wingredient');
        ingredientNode.textContent = array1['groups']['ingredient'];

        const matchNode = document.createElement('span');
        matchNode.classList.add('C2Wmatch');
        matchNode.textContent = ` (${chartIngredient})`;
        matchNode.style.fontStyle = 'italic';
        matchNode.style.opacity = '50%';
        
        const originalText = listItem.textContent;
        // TODO: add an eventlistener to toggle between original and g display
        // TODO: make allllllll this shit modular
        // TODO: make a css file to style the different parts
        // TODO: gracefully display fractions

        listItem.textContent = '';
        listItem.appendChild(numberNode);
        listItem.appendChild(unitNode);
        listItem.appendChild(ingredientNode);
        listItem.appendChild(matchNode);

        // TODO: change classList instead (toggle hiding/not)
        // TODO: show conversion information? maybe?
        // TODO: display calculation on hover?
        // TODO: 'mouseenter' only works after clicking back on the main page.
        //       Switch focus back to document after clicking the button in popup.html?
        listItem.addEventListener('mouseenter', (e) => {
          const ogTextNode = document.createElement('div');
          ogTextNode.textContent = originalText;
          e.target.appendChild(ogTextNode);
        });
        listItem.addEventListener('mouseleave', (e) => {
          e.target.removeChild(e.target.lastElementChild);
        });
      }
    }
  }

  // console.table(ingredients);
}


