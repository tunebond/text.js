<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>@tunebond/text</h3>
<p align='center'>
  Transliteration and romanization of the world's scripts
</p>

<br/>
<br/>
<br/>

## Overview

This library aims to be a way of converting text in all kinds of writing
systems to a consistent and stable ASCII encoding, which can then
further be processed into a more readable form. It should be able to
take text mixing various scripts and isolate out the parts to romanize
in as best a way as possible.

There are many languages which use the same script in slightly different
ways. For example, Vietnamese uses the Latin alphabet with all kinds of
specialized diacritics, same with Chinese Pinyin. And Arabic is used in
various forms such as Standard Arabic, Persian, and Urdu, amongst
others. So in these cases, given an arbitrary chunk of text which we
don't know the encoding for, it can only do a rough approximation of a
guess (like it's a Latin or Arabic script, not knowing if it's
Vietnamese vs. Finnish vs. Icelandic, etc.).

When we know the encoding of the text, such as given some Icelandic
text, we can write a custom handler for transliterating that as best as
we can. So we have two entrypoints:

1. Unknown text
2. Known text

If we know the type of text and system it's written in, we can
potentially add a parser for that. Otherwise it falls back to a more
generic parser like the Latin parser.

Some languages have very good transliteration capabilities, such as the
many Indic scripts used for just one or a few languages (like Tamil, or
Thai, or Sinhala for example). These languages can be transliterated
fairly well. But given Yoruba or Vietnamese, without knowing it's one of
those langugaes, we won't be able to get super close in terms of
pronunciation automatically, you need to tell it to use those specific
parsers.

## Installation

```
pnpm add @tunebond/text
yarn add @tunebond/text
npm i @tunebond/text
```

## Usage

You can use this library to process text in a few steps:

1. Convert written text in various languages to ASCII
   [chat text](https://github.com/tunebond/chat) (seed chat text).
2. Convert that ASCII chat text to diacritic-rich chat text (rose chat
   text).
3. Or convert the ASCII text to simplified chat text (bird chat text),
   which loses the pronunciation factors but makes it easy on the eyes.

```ts
import text from '@tunebond/text'

text.tibetan.make('འཁངས') // => khaq
```

Make it seemingly human readable:

```ts
import text from '@tunebond/text'
import chat from '@tunebond/chat'

chat.read(text.tibetan.make('འཁངས')) // => khang
```

Find out what script some text is from:

```ts
import text from '@tunebond/text'

text.find('कल्पना') // => { form: 'devanagari', rank: 1 }
text.rank('कल्पना') // gives back more than one language if apparent.
```

## TODO

Take mixed script writings and transliterate them as best as possible.

```ts
import text from '@tunebond/text'

text.make('कल्पनाའཁངས')
```

## License

MIT

## TuneBond

This is being developed by the folks at [TuneBond](https://tune.bond), a
California-based project for helping humanity master information and
computation. TuneBond started off in the winter of 2008 as a spark of an
idea, to forming a company 10 years later in the winter of 2018, to a
seed of a project just beginning its development phases. It is entirely
bootstrapped by working full time and running
[Etsy](https://etsy.com/shop/tunebond) and
[Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also
find us on [Facebook](https://www.facebook.com/tunebond),
[Twitter](https://twitter.com/tunebond), and
[LinkedIn](https://www.linkedin.com/company/tunebond). Check out our
other GitHub projects as well!
