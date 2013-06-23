#!/bin/bash
shopt -s nocaseglob

for dir in ./contents/articles/*
do
  (cd $dir && mkdir -p ./thumbs && mogrify -resize 164x110 -format jpg -quality 75 -path thumbs *.jpg)
done

echo `pwd`

cd ./contents/heritage

cd ./"Gunther Rochelt"

mkdir -p thumbs
mogrify -resize 250x165 -format jpg -quality 75 -path thumbs passenger.jpg
mogrify -resize 250x165 -format jpg -quality 75 -path thumbs solair2team.jpg

cd ../"Sunseeker I"

mkdir -p thumbs
mogrify -resize 250x330 -format jpg -quality 75 -path thumbs sunseekeriatshop.jpg
mogrify -resize 250x330 -format jpg -quality 75 -path thumbs sunseekerwithsolarcar.jpg
mogrify -resize 950x365 -format jpg -quality 75 -path thumbs cunim.jpg
mogrify -resize 250x165 -format jpg -quality 75 -path thumbs sunseekeridesert.jpg
mogrify -resize 250x165 -format jpg -quality 75 -path thumbs chanute.jpg

cd ../"Edelweiss"

mkdir -p thumbs
mogrify -resize 250x175 -format jpg -quality 75 -path thumbs frombelow.jpg
mogrify -resize 250x175 -format jpg -quality 75 -path thumbs edelweisstahachapi.jpg

cd ../"Sunseeker II"

mkdir -p thumbs
mogrify -resize 452x300 -format jpg -quality 75 -path thumbs sunseekerII.jpg
mogrify -resize 250x187 -format jpg -quality 75 -path thumbs alpscockpit.jpg
mogrify -resize 250x187 -format jpg -quality 75 -path thumbs arrival.jpg
mogrify -resize 950x365 -format jpg -quality 75 -path thumbs overwindfarmcropped.jpg
