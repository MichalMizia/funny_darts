# Funny darts

This is a project I made for fun. Me and my roommate often play darts in our dorm room but we are not very good at it, so sometimes
the darts end up sticking in the door instead of the board. We decided it would be a funny idea to somehow penalize this awful type of throw so I quickly created a react app for playing darts with a twist.

Mostly it works like a normal dart app, you press spots on a dartboard where your dart has landed, there is miss and undo functionality (to add a miss you just press on the outer edge of the dartboard) but there is an additional button called "drzwi" - door in polish, each player has a list of boosts and pressing "drzwi" adds a boost for the current player. In the App.tsx component there is a list

```ts
const ALL_BOOSTS = [
  "Kolejną rundę rzucasz druga ręka, jeśli przynajmniej 2/3 rzuty nie będą punktowane to +50 pkt",
  "Przeciwnik mówi ci czy twój kolejny rzut ma trafić w wartość parzystą czy nie parzystą, jeśli nie trafisz tego co miałeś +50",
  "W kolejnej rundzie jeśli twoja liczba punktów nie będzie większa niż 50 pkt, to +50",
  "Przeciwni gracze dostają -50 pkt ",
  "Otwórz Instagrama, jeśli twój pierwszy reels nie będzie rasistowski to dostajesz +50",
];
```

If you want to modify the boosts you can clone the project, change them, run

```
npm i
npm run dev
```

There is also an input for adding however many points you want to the current player, it supports negative numbers
