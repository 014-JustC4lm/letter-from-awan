import { useState } from "react";
import Slide from "./components/Slide";
import TypingText from "./components/TypingText";
import { AnimatePresence } from "framer-motion";
import cat from "./assets/img/cat.mp4";
import hbd1 from "./assets/img/hbd1.mp4";
import hbd3 from "./assets/img/hbd3.jpg";
import cat2 from "./assets/img/cat2.mp4";
import cat3 from "./assets/img/cat3.jpg";
import letter from "./assets/img/letter.jpg";
import toro from "./assets/img/toro.mp4";
import ConfettiEffect from "./components/ConfettiEffect";


export default function App() {
  const [step, setStep] = useState(0);

  const slides = [
    {
      video: hbd1,
      header: "SELAMAT ULANG TAHUNN ARAAA!! 🎂",
      text: "There's more waiting, click the button below to keep going!",
      buttonText: "Tap heree",
    },
    {
      image: hbd3,
      header: "Ara semakin dewasa yaaa",
      text: "Selamat naik level kehidupan rawrrr",
      buttonText: "Next😋",
    },
    {
      image: cat3,
      header: "Sweet sixteen for the coolest person I know!",
      text: "i have a gift for ya on the last slide, so keep going!",
      buttonText: "Lanjut laa🆙",
    },
    {
      video: cat2,
      header: "You really get even amazing with each year that passes, and that's wonderful",
      text: "Awal kenal suda keren, makin kesini makin sangat amat wow luar biasa amazing keren sekaliii",
      buttonText: "continuee⏩",
    },
    {
      video: cat,
      header: "aku buat ini karna keliatan keren",
      text: "dan aku buat ini juga karna kamu keren",
      buttonText: "ahaha krinj nyaa😭",
    },
    {
      image: letter,
      text: "this is the last one, u can click the button to claim your gift. read it slowly and carefully yaaa",
      buttonText: "yes yesss! i wanna claim my gift!!",
    },
  ];

  const finalMessage = `Hi hiiii Sarah Aulia Nursyifa, or what I always call as Araaa. This letter is written a hundred percent by Awan, no no ai have been used in this letter. 🎀

Hloooowwww, you’re now a student in highschool. Yess, you’re not adek-adek anymore. Sekarang kita ada di jenjang yang sama raaa. Kita sama sama punya beban saat pertama kali memasuki gerbang sekolah yang baru. Aku dengan rasa penyesalanku yang membatasi diri, dan kamu dengan rasa cemas yang perlu beradaptasi dengan lingkungan yang baru. Tapi aku percaya, kamu suda menaklukkan rasa cemas itu dengan caramu sendiri, karena ara kan kerenn. 🔥

Menurutku, SMA ini adalah masa yang betul-betul membentuk bagaimana kita selanjutnya. Bukan hanya karena sekolahnya, tapi di rentan usia ini bisa aku bilang rangka nya untuk kita saat dewasa. Kalau kamu sudah menemukan jati diri atau passion mu, maka lanjutkan. Tapi kalau belum pun tida apa, yang penting kamu berusaha dan giat untuk belajar apapun itu.

Kamu katanya mau kuliah jurusan psychology rightt ??? Kalau tujuanmu masi itu, berarti kamu harus lebih sensitif dan teliti terhadap satu individu. Kalau sosiologi kan mengkaji kelompok manusia yaaa, berarti mungkin bisa jadi tujuan kamu belajar setelah psychology, agar kamu bisa mastering the humans (ANJAI). 😜

Sekarang kamu juga lebih ambis di akademik mu yaa. Mungkin memang duta, ataupun osis/mpk itu belum berhasil mendapatkan kamu, tapi aku percaya kalau jalan yang kamu pilih diluar dari organisasi-organisasi itu adalah hal yang terbaik untuk kamu dari Allah. Kamu sempet mention beberapa masalah di duta kann ? Allah menjawab mu agar duta nya sendiri yang menghindarimu, untuk memberikanmu kebebasan. Allah juga menjauhkan osis dari kamu, karna tau pasti akan membuat ara lebih exhausted.

And yess, if u ever feel lost, got no way out, always pray to allah. Believe that allah will always answer your prayer. Coba juga rumus doa ku raaa, karna sepanjang aku doa seperti ini, ampuh bangettt. Dan jangan lupa untuk mensyukuri apapun itu yang kamu terima, always be a positive person and trust in Allah.

Even thought we’re rarely to communicate, even thought we’re miles away, I know that we both still believe in each other. Sooo, if u got any problems to tell, or even just a short story, u can always talk to me. And also let me cerita-cerita yaa (karna tanggapanmu selalu keren dan bisa paham meski aku sering muter muter ceritanya WKWKKWKW. Pokoknya cerita sama kamu 1000/10). ✨

Aku doakan ara pasti cerdas, pasti sehat, pasti kaya, pasti hebat, pasti bahagia, dan pasti sukses. Aku percaya kok, ara pasti akan berhasil menjadi apapun yang kamu inginkan, meski badai dingin dan ombak menerjangmu dengan kencang. Aku doakan jugaa, keluargamu pasti sehat selalu, untuk papamu, mamamu, kakakmu, dan adikmu. Aku percaya apapun yang kamu harapkan untuk dirimu di umur ke-16 ini pasti semuanya tercapai ya raaa, aamiiinnnnn.

So sorry if this letter was kinda cringy, cuz it’s a long time ago since I write a lot. Whatever you wanted to achieve, always believe that u will make it, and I believe that u will.  Also remember this phrase “Hidup itu adalah pilihan, tetapi langkahmu hari ini menentukan masa depanmu.” Selebihnya jangan lupa take care of yourself, istirahat dengan cukup, hindari makan terlambat, minum vitamin and suplemen, dan pastinya hindari untuk terlalu memaksakan dirimu sendiri. 🤝

So yeaahhh that’s all from me, selamat ulang tahun yaaa untuk araaa. Thank youuuu, Rawwrrrrrr. 🐥🐣

Oiya, where’s the poem for mee?? I sangat menanti itu lhooo. Tapi gapapa kalau u’re not ready yet, u can show me if u’re fully percaya diri, AHAHAHAAA. Dadahhhh👋

-	Awannn ☁`;

  const isLast = step === slides.length;


  
return (
  <div className="min-h-screen flex items-center justify-center overflow-hidden relative bg-animated z-0">


    {/* Confetti muncul hanya di final slide */}
    <ConfettiEffect active={isLast} />

    {/* Glowing Background */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
    </div>

    <AnimatePresence mode="wait">
      {!isLast ? (
        <Slide key={step} {...slides[step]} onNext={() => setStep(step + 1)} />
      ) : (
        <Slide key="final" video={toro} header="For You 🐥🐣" isLast>
          <TypingText text={finalMessage} speed={40} />
        </Slide>
      )}
    </AnimatePresence>
  </div>
);
}
