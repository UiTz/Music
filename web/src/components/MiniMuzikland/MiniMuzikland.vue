<template>
	<!-- 迷你歌单展示组件 -->
	<div class="container">
		<div>
			<p v-cloak class="playCount">
				<svg class="icon" height="20" p-id="7235" t="1572947529240" version="1.1"
				     viewBox="0 0 1142 1024" width="20" xmlns="http://www.w3.org/2000/svg">
					<path class="selected"
					      d="M1123.018984 688.238017C1118.787579 333.01157 936.202455 0 571.243778 0S22.218984 334.915702 19.468571 692.046281a74.895868 74.895868 0 0 0-19.464463 50.353719v110.228099a73.414876 73.414876 0 0 0 57.123967 72.357025l57.123967 13.752066v9.097521a76.37686 76.37686 0 0 0 76.165289 76.165289h76.16529a76.37686 76.37686 0 0 0 76.165289-76.165289V643.385124a76.37686 76.37686 0 0 0-76.165289-76.165289h-76.16529a76.37686 76.37686 0 0 0-76.165289 76.165289v10.578512l-17.771901 6.135538c12.905785-301.487603 169.256198-582.876033 474.763637-582.876034s461.01157 279.484298 474.763636 579.70248l-17.983471-4.231405v-9.097521a76.37686 76.37686 0 0 0-76.165289-76.165289h-76.16529a76.37686 76.37686 0 0 0-76.165289 76.165289V947.834711a76.37686 76.37686 0 0 0 76.165289 76.165289h76.37686a76.37686 76.37686 0 0 0 76.165289-76.165289v-10.578513l57.123967-16.079338a73.414876 73.414876 0 0 0 57.123967-72.357025v-110.228099a74.895868 74.895868 0 0 0-19.464463-50.353719z"
					      data-spm-anchor-id="a313x.7781069.0.i20" fill="#FFFEFF" p-id="7236"></path>
				</svg>
				{{ muzikland.playCount | playCount }}
			</p>
			<img :src="muzikland.picUrl" alt="" class="img">
		</div>
		<p class="title" v-text="muzikland.name"></p>
	</div>
</template>

<script>
	export default {
		filters: {
			playCount: function (value) {
				function addWan (integer, number, mutiple, decimalDigit) {
					var digit = getDigit(integer);
					if (digit > 3) {
						var remainder = digit % 8;
						if (remainder >= 5) { // ‘十万’、‘百万’、‘千万’显示为‘万’
							remainder = 4;
						}
						return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万';
					} else {
						return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit);
					}
				}

				function getDigit (integer) {
					var digit = - 1;
					while (integer >= 1) {
						digit ++;
						integer = integer / 10;
					}
					return digit;
				}

				function addChineseUnit (number, decimalDigit) {
					decimalDigit = decimalDigit == null ? 2 : decimalDigit;
					var integer = Math.floor(number);
					var digit = getDigit(integer);
					// ['个', '十', '百', '千', '万', '十万', '百万', '千万'];
					var unit = [];
					if (digit > 3) {
						var multiple = Math.floor(digit / 8);
						if (multiple >= 1) {
							var tmp = Math.round(integer / Math.pow(10, 8 * multiple));
							unit.push(addWan(tmp, number, 8 * multiple, decimalDigit));
							for (var i = 0; i < multiple; i ++) {
								unit.push('亿');
							}
							return unit.join('');
						} else {
							return addWan(integer, number, 0, decimalDigit);
						}
					} else {
						return number;
					}
				}

				return addChineseUnit(value);
			}
		},
		props: {
			muzikland: {
				type: Object,
			},
		},
		name: "MiniMuzikland",
		data () {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.container {

		max-width: 123px;
		position: relative;

		.playCount {
			position: absolute;
			top: 0;
			right: 5px;
			color: #FEFEFE;
		}

		.img {
			width: 123px;
			height: 123px;
		}

		.title {
			margin: 0 auto;
			max-width: 115px;
			font-size: 13px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

	}
</style>
