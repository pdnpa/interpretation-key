<template>
  <div></div>
</template>
<script>
/**
 * Import any custom scss stylesheets here
 */
// import "./reportstyles/theme.scss"

export default {
  name: 'ReportComponent',
  methods: {

    /**
     * Rather than using simple import statements as per a typical component, you have to register
     * any custom components here. The format is
     *
     *    'ComponentNameAsUsedInContent': () => import('./components/PathToComponent'),
     *
     *  Note that you don't need ".vue" extension. Also, the key is what you use in your content, so in the example
     *  above one of the md pages could contain:
     *    <ComponentNameAsUsedInContent :anycustomprop="1"></ComponentNameAsUsedInContent>
     *
     *  Typically you should store your custom components in ./components
     *
     */
    getComponentsList() {
      return {

      }
    }
  }
}
</script>
<style lang="scss">
/**
 * You can specify global styles here, or use an imported scss file
 */
</style>