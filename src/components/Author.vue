<template>
	<div class="author">

		<g-image alt="Author image" class="author__image" :src="`${$static.metaData.author.image.asset.url}?w=360`" width="180" height="180" blur="5" />
    {{authorImage}}
		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metaData.siteName }}
		</h1>

		<p class="author__intro">
			{{$static.metaData.description}}
		</p>

		<p class="author__links">
			<a href="//twitter.com/gridsome">Follow on Twitter</a>
			<a href="//github.com/gridsome/gridsome-starter-blog">GitHub</a>
		</p>

	</div>
</template>

<static-query>
query {
  metaData: sanitySiteSettings(id: "siteSettings") {
    siteName: title
    description
    author {
      name
      image {
        asset {
          url
        }
      }
    }
  }
}

</static-query>

<script>
import PortableText from 'sanity-blocks-vue-component'
export default {
  components: {
PortableText
  },
  props: ['showTitle']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
