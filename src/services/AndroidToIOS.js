export async function getAllUsers() {

    try{
        const response = await fetch('/api/users');
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function convertAndroidToIOS(data) {
    try{
      const response = await fetch('http://192.168.0.66:5000/string_to_IOS', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: data})
      })
      return await response.json();
    } catch (error) {
      return [];
    }
  }