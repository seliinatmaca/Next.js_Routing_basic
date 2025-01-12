# App Router

- Dosya dizinine göre / klasör tabanalı sayfalama vardır.
- Bütün sayfalar src/app klasörü içerisinde tanımlanır.
- App içerisinde tanımlanan ve içinde page.jsx dosyası olan her bir klasör bir sayfaya denk gelir.
- Her page dosyasında bir react bileşeni olmalı ve default export edilmelidir.

## Nested Routes - İç İçe Yollar

- örn:

- /profile > profilini görüntüle

- /profile/friend > arkadaşlarını görüntüle

- /profile/edit > profili düzenle

- nested routes oluşturuken bir child (alt) route oluşturmak için sadece bir sayfa klasörü içerisnde içinde page.js dosyası olan bir klasör daha oluştururuz.

## Dynamic Routes - Dinamik Yollar

- Bir e ticaret projesi yapıyorsak yüzlerce ürün olduğundan dolayı ürün detay safasını url'deki parametreye göre değişen bir şekilde oluşturmmamız gerekir

- Youtube > video sayfası

- Amazon > ürün detay sayfası

- Netflix > film sayfası

örn: /products/20
örn: /products/19
örn: /products/3
örn: /products/99

## Nested Dynamic Routes - İç İçe Dinamik Yollar

- örn: /products/20/reviews > id'si 20 olan ürünün yorumlarının gösterildiği sayfa

- örn: /products/20/reviews/99 > id'si 20 olan ürünün 99 id'li yorumunun gösterildiği sayfa

## Catch All Segements

- Bir route'da birden fazla parametre olduğu zaman kullanlan bir yöntemdir.

- /docs/belge-1/sayfa-3

- /docs/belge-3/sayfa-1

- /docs/belge-9/sayfa-10

Yukarıdaki örnek te dökümanlar yolunda iki farklı parametre vardır 1. parametre hangi belgenein görüntüleneceğini 2. parametre kaçıncı sayfasının görüntülenceğini ifade eder.

## Undefined Page

Varsayılan olarak tanımlanmayan bir sayfaya gittiğimizde çıkan 404 sayfası bulunsada istersek bunu özelleştirebiliyoruz.

Özelliştirmek için /src/app klasörü içeriisinde not-found.jsx dosyası olulturmamız gerekli.

Bu dosyası oluşturursak varsasyılan undefined sayfası devre dışı kalır ve bizim oluşturuduğumuz devreye girer

Eğer farklı bir route içeirisnden kullanıcyı undefined sayfasına yönlendirmek istersek notFound fonksiyonunu kullanabiliyoruz.

## Route Group - Yol Gruplandırma

Proje içerisindeki sayfaları gruplandırmak isteyebiliriz.

Yazdığımız sayfların daha kolay erişilebilir olması için route'ları gruplandırmak isteyebiliriz.

Nested routes'dan farklı olarak url'e etke etmez

Örneğin

- Auth

- - Login.jsx
- - Singup.jsx
- - ForgotPass.jsx

- Profile

- - User.jsx
- - EditUser.jsx
- - UserFriends.jsx
    Kullanılmasındaki amaç daha erişilebilir ve daha kolay yönetilebielcek klasör yapısı

## Metadata

SEO açısından her sayfa için metadata'ları tanımlamak önemlidir.

Sayfaların metadata dediğimiz tarayıcıda öne çıkması için ihtiyacı olan başlık / açıklama / logo / yapımcı gibi değerleri react'da sabit bir şekilde ifade ederken next.js bunu her sayfaya özel yapmamıza olana sağlar

Bir sayfa için metadata tanımlamak istiyorsak os sayfanın dosyasında bir metadata isimli nesne oluşturmak ve onu export etmek gerekli

Dynamic sayfalarda metadata'nında dinamik olmasını isteyebiliyoruz. Örneğin Ürün - 10 gibi bir başlık isteyebiliriz ve bu 10 sayısı urldeki parametreye göre değişiri. Bu tarz durumlarda sabir bir metadata nesnesi olulturak yerine onu oluşturucak olan bir generateMetadata() fonksiyonu kullanırız

# Layout

- Bir uygulamanın veya sayfa grubunun genel dizaynını berlirlememize yardımcı olan yapı.

- Bir sayfa grubunun ortak olarak kullandığı bileşenleri layout'a tanımlayıp kod tekrarını önleyebiliyoruz.

- Root layout'a yaptığımı zdeğişiklikler bütün sayfaları etkiler.
  Ama bazı durumlarda sadece bir kaç sayfanın ortak olarak kullanıcağı bir düzen belirlemek isteyebiliriz.

# Özel Dosyalar

- Page.jsx
- Layout.jsx
- Template.jsx

- Loading.jsx
- - bir bileşen awit ile async bir fonkaiyonun beklediği sürede ekrana gelir.

- Error.jsx
- - bir bileşende hata fırlatıldığı durumda devreye girer
- - prop olarak gelen hatanın bilgilerini ve sayfayı tekrar render etmeye yarayann metodu alır.

# Static Dynamic Page

- Next.js'de farklı türde sayfa bulunur.

1. Static:

- Derleme sırasında sunucu tarafından oluştururlur ve birkez oluşturulduktan sonra her sayfayı açışımızda aynı içeriği sunar.

- Static sayfalar genellikle sıklıkla değişmeyen içeriğe sahip olan sayfalardır.

- Bir sitenin login / signup, haakımızda, iletişim sayfaları örenk verilebilir.

2. Dynamic Page

- Dinamik sayfalar her sayfayı açtığımızda sunucu tarafından tekrar oluşturulur.

- Sayfa içeriğiistek anındaki parametrelerle veya dış kaynakalrdanalınan verilere göre değişebilir.

- Örnek: Bir e ticaret sitesi ürün detay sayfası buna örnek verilebilir.Alınan parametreye göre içerik değişir.Twitterın anasayfası örenk verilebilir.Parametre değişmiyor olsa da ekrana gelen tweetlwr sürekli değişir.
