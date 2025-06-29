export const idlFactory = ({ IDL }) => {
  const Sex = IDL.Variant({ 'Male' : IDL.Null, 'Female' : IDL.Null });
  const Chara = IDL.Record({
    'age' : IDL.Nat,
    'bmi' : IDL.Nat,
    'sex' : Sex,
    'weight' : IDL.Nat,
    'height' : IDL.Nat,
    'calories' : IDL.Nat,
    'name' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : Chara, 'err' : IDL.Text });
  return IDL.Service({
    'add_character' : IDL.Func([Chara], [Chara], []),
    'get_my_character' : IDL.Func([], [IDL.Opt(Chara)], []),
    'update_character' : IDL.Func([Chara], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };