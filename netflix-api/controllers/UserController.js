const User = require("../models/UserModel");


module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "Película ya agregada a la lista." });
    } else await User.create({ email, likedMovies: [data] });
    return res.json({ msg: "Película añadida con éxito." });
  } catch (error) {
    return res.json({ msg: "Error Añadiendo Pelicula" });
  }
};

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await await User.findOne({ email });
    if (user) {
      return res.json({ msg: "exito", movies: user.likedMovies });
    } else return res.json({ msg: "Usuario con correo electrónico dado no encontrado." });
  } catch (error) {
    return res.json({ msg: "Error al obtener películas." });
  }
};
module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const movies = user.likedMovies;
      const movieIndex = movies.findIndex(({ id }) => id === movieId);
      if (!movieIndex) {
        res.status(400).send({ msg: "Pelicula no Encontrada." });
      }
      movies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies: movies,
        },
        { new: true }
      );
      return res.json({ msg: "Película eliminada con éxito.", movies });
    } else return res.json({ msg: "Usuario con correo electrónico dado no encontrado." });
  } catch (error) {
    return res.json({ msg: "Error al eliminar la película de la lista" });
  }
};