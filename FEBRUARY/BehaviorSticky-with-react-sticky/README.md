# Proof of concept `BehaviourSticky`

🌍 Demo Online → https://build-cxkssafkos.now.sh/

This proof of concept shows:
- The implementation of `HeaderFixedTop` and `FooterFixedBottom` through CSS
- The use of `react-stickup` providing
    - `StickyProvider` → general parent which centralize the scroll event management and pass this info to Consumer childrens (`Sticky` components)
    - `Sticky` → child component w/ sticky behaviour (customized through props) that can be used as a component w/ children or children as function
- The possible combinations of different sticky behavious on the same page


## Resources

- [`react-stickup`](https://github.com/garthenweb/react-stickup/) which internally uses [`react-viewport-utils`](https://github.com/garthenweb/react-viewport-utils)
- [How to create an animated sticky header after some scrolling](http://www.menucool.com/ui/animated-sticky-header-on-scroll)