const getYoutubeId = url => {
  const [ , code ] = url.match( /v=([^&#]{5,})/ )
  return typeof code == 'string' ? code : url
}

const youtubeVideoUrl = videoUrl =>
  `https://www.youtube.com/embed/${ getYoutubeId(
    videoUrl
  ) }?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0`

const imageSize = ( url, size = '100x100' ) => {
  const imageProducts = url.split( 'imageProducts' )
  const type = imageProducts[ 1 ].split( '.' )[ 1 ]
  const afterType = type.split( '?' )
  const typeSelect = imageProducts[ 1 ].split( `.${ afterType[ 0 ] }` )
  const compose = `${ imageProducts[ 0 ] }imageProducts${ typeSelect[ 0 ] }-${ size }.${ afterType[ 0 ] }${ typeSelect[ 1 ] }`
  console.log( compose )
  return compose
}

const googleapisImageSize = ( module, fileName, size = '100x100' ) =>
  `https://storage.googleapis.com/ricoh-app.appspot.com/image/${ module }/${ fileName.replace(
    '.',
    `-${ size }.`
  ) }`

const image100x100 = ( module, fileName ) => googleapisImageSize( module, fileName )

const image500x500 = ( module, fileName ) =>
  googleapisImageSize( module, fileName, '500x500' )

export { getYoutubeId, youtubeVideoUrl, imageSize, image100x100, image500x500 }
