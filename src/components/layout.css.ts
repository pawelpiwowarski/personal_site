import { style } from '@vanilla-extract/css';

const container = style({
margin: 'auto',
maxWidth: '1000px',
color: 'black',
fontFamily: 'fantasy',
paddingTop: "175px"




}
  )

  const menubar =  style({
    margin: 'auto',
    maxWidth: '1000px',
    color: 'black',
    fontFamily: 'fantasy',
    backgroundColor: '#674ea7',

    
    
    }
      )
const heading = style({
  color: 'rebeccapurple'
})

const nav_link = style({
  display: 'flex',
  listStyle: 'none',
  paddingLeft: 0
})

const nav_link_item = style({
  paddingRight: '2rem'
})

const nav_link_text = style({ 
  color: 'black'
})

const site_tile = style({
  fontSize: '3rem',
  color: 'black',
  fontWeight: 700,
  margin: '3rem 0'
})

const footer = style({
  display: 'flex',
  height: '20vh',
  width: '100%',
  backgroundColor: '#002a38',
  lineHeight: 1.3,
  fontFamily: 'Menlo, monospace'
})

const footer_ul = style({
  display: 'inline-grid',
  gridAutoFlow: 'row',
  gridGap: '24px',
  justifyItems: 'center',
  margin: 'auto'
})
export {menubar, site_tile,container, heading, nav_link, nav_link_item, nav_link_text, footer, footer_ul}