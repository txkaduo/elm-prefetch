module Prefetch where

{-| Prefetch resource.

# Prefetch
@docs image
-}

import Task exposing (Task)
import Native.Prefetch

{-| Prefetch an image.

  image "http://example.com/image.jpg"
-}
image : String -> Task String ()
image =
  Native.Prefetch.image
