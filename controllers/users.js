import User from '../models/user.js'

export async function getAllUsers (request, response) {
    try {
        const result = await User.find()
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}

export async function getOneByUserName (request, response) {
    try {
        User.findOne(request.params)
        .then(userFound => {
            if(!userFound){
                return response.status(404).end()
            } return response.status(200).json(userFound)
        })
        // console.log(request.params)
    } catch(error){
        response.status(500).json({ message: error.message})
    }
}

export async function createUser (request, response) {
    try {
        const newUser = await User.create(request.body);
        const token = user.getSignedJwtToken()
        response.json({newUser, token})
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}

export async function login (req, res, next) {
    try { 
      const { email, password } = req.body;
  
      if (!email || !password) {
        res.status(400).send('Please provide an email and password')
        return;
      }
  
      const user = await User.findOne({ email }).select('+password');
  
      if (!user) {
        res.status(401).send('Invalid credentials')
        return;
      }
  
      const doesPassMatch = await user.matchPassword(password);
      if (!doesPassMatch) {
        res.status(401).send('Invalid credentials')
        return;
      }
  
      const token = user.getSignedJwtToken();
  
      res.json({ success: true, token })
  
    } catch(err) {
      next(err)
    }
  }

  export async function getMe (req, res, next) {
    const user = await User.findById(req.user.id);
  
    res.json({
      success: true,
      data: user
    });
  }

