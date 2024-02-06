---
title: test ar
date: 2024/1/29
description: eeeeee
tag: Human
author: hawalinajwan
---

## aaaarrr

```
const int pinAnalog = A10; //inisialisasi pin sensor
const int relay = 5;      //inisialisasi pin relay
const int ledGreen = 2;   //inisialisasi pin led hijau
const int ledYellow = 4;  //inisialisasi pin led kuning
const int ledRed = 3;     //inisialisasi pin led merah

void setup() {
  Serial.begin(9600);        //memanggil serial monitor
  pinMode(pinAnalog, INPUT); //menetapkan pin A5 sebagai input
  pinMode(relay, OUTPUT);    //menetapkan pin 5 sebagai output
  pinMode(ledGreen, OUTPUT); //menetapkan pin 2 sebagai output
  pinMode(ledYellow, OUTPUT);//menetapkan pin 4 sebagai output
  pinMode(ledRed, OUTPUT);   //menetapkan pin 3 sebagai output
}

void loop() {
  int dataAnalog = analogRead(pinAnalog);  //membaca nilai dari pin sensor
  float kelembabanTanah = (100.0 - (dataAnalog / 1023.0) * 100.0); 
  //presentase kelembapan tanah

  //print hasil ke serial monitor
  Serial.print("A10: ");
  Serial.print(dataAnalog);
  Serial.print(" | Persentase Kelembaban Tanah = ");
  Serial.print(kelembabanTanah);
  Serial.println("%");

  //jika nilai A10 kurang dari 500,
  //nyalakan led hijau dan matikan led lainnya serta relay
  if (dataAnalog < 500) {
    Serial.println(". Media Masih Basah + off");
    digitalWrite(ledGreen, HIGH);
    digitalWrite(ledYellow, LOW);
    digitalWrite(ledRed, LOW);
    digitalWrite(relay, HIGH);
  }
  //jika nilai A10 kurang dari 900, 
  // nyalakan led kuning dan relay serta matikan led hijau & merah
  else if (dataAnalog < 900) {
    Serial.println(". Perlu Tambahan Air + on");
    digitalWrite(ledGreen, LOW);
    digitalWrite(ledYellow, HIGH);
    digitalWrite(ledRed, LOW);
    digitalWrite(relay, LOW);
  }
  //selain dari itu, nyalakan led merah
  //dan relay serta matikan led hijau dan kuning
  else {
    Serial.println(". Tanaman Kering + on");
    digitalWrite(ledGreen, LOW);
    digitalWrite(ledYellow, LOW);
    digitalWrite(ledRed, HIGH);
    digitalWrite(relay, LOW);
  }

  delay(1000); 
}

```

<Image
  src="/images/ard.png"
  alt="Photo"
  width={562}
  height={375}
  priority
  className="next-image"
/>

idk work or ga, gaada alatnya :D