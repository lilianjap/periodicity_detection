## Mapping periodic dance movements to control music playback tempo in real-time

## Description

A proof-of-concept prototype to detect rhythmicity in motions in real-time that was developed in my master thesis project. The rhythmicity is then analysed for changing the bpm of a chosen music playback. 

## Installation

* Mubu toolbox: https://forumnet.ircam.fr/product/mubu-en/
* Requires Max/MSP 7 as the latest version, Max/MSP 8 is not compatible with the Mubu toolbox (as of Spring 2019)

## Things to think about

- Make sure the sensor is sending out to the right ip-address and local-host (your computer) and only one sensor is being used (right now, two udp-senders are connected).
  Instructions can be found here:
  * https://www.vibra.no/blogg/connecting-multiple-sensors-part-1-ngimus-over-wi-fi
  * http://x-io.co.uk/ngimu/

- Make sure attributes in pipo.yin object are set. Can be set both manually or to be static. If not modified, the attributes are put to default values that are listed in the patch.

- Audio status settings: I/O vector size 1024, signal vector size 512

- Rewinding and Fast-Forwarding is not enabled for the music playback. Can only start from the beginning of a song, and choosing song can only be done by indicating the index in the chosen music buffer (folder).

- Make sure that following global tempo is checked if wanting to manipulate the tempo.
