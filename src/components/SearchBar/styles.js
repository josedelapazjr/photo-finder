export default {
  root: (props) => {
    console.log('props: ', props);
    return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 300,
      backgroundColor: 'lightblue',
    }
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    minWidth: 300
  },
  button: {
    marginTop: 10,
  }
}

// full: "https://images.unsplash.com/photo-1543536174-abe912e3553e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjcyMjQxfQ"
// raw: "https://images.unsplash.com/photo-1543536174-abe912e3553e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyMjQxfQ"
// regular: "https://images.unsplash.com/photo-1543536174-abe912e3553e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcyMjQxfQ"
// small: "https://images.unsplash.com/photo-1543536174-abe912e3553e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcyMjQxfQ"
// thumb: "https://images.unsplash.com/photo-1543536174-abe912e3553e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMjQxfQ"