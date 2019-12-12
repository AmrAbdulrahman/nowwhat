# اعمل الصح

## install
`npm i -g nowwhat`

## Example usage
`> nowwhat`

<p align="center">
  <img align="center" src="https://github.com/AmrAbdulrahman/nowwhat/blob/master/img/example.png?raw=true" alt="اعمل الصح" />
</p>

## Not executable?

### try adding global npm bin to your path
edit `~/.bash_profile` or `~/.bashrc`
```
NPMPREFIX=`npm get prefix`
NPMBIN=$NPMPREFIX'/bin'
export PATH=$PATH:$NPMBIN
```
